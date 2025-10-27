# Corkboard Backend - Week 2

## Basic Team Setup

### **1. Get Supabase Access**
- **Project URL**: `https://glvtnapwaafqcahwkxfa.supabase.co`
- **Ask Billy** to invite you to the Supabase project

### **2. Local Setup**
```bash
# Pull the change
git fetch origin
git switch feature/supabase-setup
cd backend/

# Copy environment file
cp env.example .env

# Install dependencies
npm install

# Start the API
npm run dev
```

### **3. Test Endpoints**
- **Health**: `http://localhost:3000/api/health`
- **Events**: `http://localhost:3000/api/events`
- **Venues**: `http://localhost:3000/api/venues`

### **4. Database Already Set Up!**
- Some sample starter data are loaded.

## Initial Schema

### **Database Tables:**
- **venues** - Hamilton music venues
- **events** - Music shows
- **users** - App users
- **genres** - Music categories
- **user_bookmarks** - Saved events
- **event_genres** - Event categorization

### **Sample Data:**
- **4 venues** in Hamilton
- **3 sample events**
- **7 music genres**

### **API Endpoints:**
- `GET /api/health` - Check connection
- `GET /api/events` - List events
- `GET /api/venues` - List venues

## Next Steps

1. **Get Supabase access** from Billy
2. **Set up local environment**
3. **Test API endpoints** (database already ready!)
4. **Start building features**