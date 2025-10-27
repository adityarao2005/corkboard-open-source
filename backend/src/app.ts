import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // expose api to port 3000

// Initialize Supabase Client
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Middleware
app.use(cors());
app.use(express.json());

// Main page
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to the Corkboard API',
    timestamp: new Date().toISOString()
  });
});

// Health check
app.get('/api/health', async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('venues')
      .select('count')
      .limit(1);
    
    if (error && error.message.includes('relation "public.venues" does not exist')) {
      res.json({
        status: 'ok',
        message: 'API connected to Supabase',
        note: 'Run migration to create tables'
      });
    } else if (error) {
      throw error;
    } else {
      res.json({
        status: 'ok',
        message: 'API connected to Supabase',
        venuesCount: data?.length || 0
      });
    }
  } catch (error: any) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to connect to Supabase',
      error: error.message
    });
  }
});

// Events endpoint
app.get('/api/events', async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .limit(10);
    
    if (error) {
      res.json({ message: 'Events table not created yet', error: error.message });
    } else {
      res.json({ events: data, count: data.length });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Venues endpoint
app.get('/api/venues', async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('venues')
      .select('*')
      .limit(10);
    
    if (error) {
      res.json({ message: 'Venues table not created yet', error: error.message });
    } else {
      res.json({ venues: data, count: data.length });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Corkboard API running on port ${PORT}`);
  console.log(`Health: http://localhost:${PORT}/api/health`);
  console.log(`Events: http://localhost:${PORT}/api/events`);
  console.log(`Venues: http://localhost:${PORT}/api/venues`);
});
