# Corkboard Project Planning & Documentation

## Table of Contents
  * [:bulb: Project Description](#-bulb--project-description)
  * [:compass: Implementation Plan](#-compass--implementation-plan)
  * [:clipboard: Team Management](#-clipboard--team-management)
  * [:athletic_shoe: Sprint Planning](#-athletic-shoe--sprint-planning)


## :bulb: Project Description

**Corkboard** is an event discovery app focused on small music venues, shows, and communities in Hamilton. Users will be able to:

- Browse upcoming events from real local sources (venues, bands, zines, etc.)
- View events on a timeline and/or map UI
- Filter by genre, time, location, or vibe
- Create accounts to save or share events with friends
- Receive personalized event suggestions (potentially using vector search or RAG-based techniques)

Unlike Eventbrite or Facebook Events, Corkboard is focused **only** on the music scene and includes smaller shows that would otherwise be buried.

## :compass: Implementation Plan

### Project Timeline

| Phase | Description |
|-------|-------------|
| **Phase 1 – MVP** | - Frontend Mobile MVP <br> - Backend MVP <br> - Initial Database <br> - Event scraper/curation from 2–3 Hamilton sources<br> - Static map or timeline view |
| **Phase 2 – Accounts & Filters** | - User auth (email or Google OAuth)<br> - Save/share events<br> - Genre, venue, and date filters<br> - Support recurring events |
| **Phase 3 – Personalization & Discovery** | - Embedding-based matching or local vector search <br> - Real-time updates |
| **Phase 4 – Polish & Admin Tools** | - Animations and clean UX polish <br> - More sources / Curation <br> - Basic administrator web page |

---

### Tech Stack
- **Frontend:** React Native, TailwindCSS
- **Backend:** Firebase (Auth, Firestore, Cloud Functions)
- **Hosting:** Firebase Hosting
- **Map SDK:** Google Maps SDK
- **Storage:** Firebase Storage or Cloudinary
- **Search / ML:** OpenAI embeddings, Pinecone or ChromaDB
- **External APIs:** Spotify Web API, IG scraping (optional), Eventbrite (optional)
- **Design:** Figma

### Project Structure
- /frontend → React Native app
- /backend → Firebase Cloud Functions
- /admin-dashboard → Web interface for event moderation
- /assets → Flyers, logo, public images

### Testing & CI/CD
- **Testing Frameworks:** Jest for frontend  
- **CI:** GitHub Actions  
- Pull requests require passing tests and reviews  
- Use Firestore local emulator during dev  

---

## :clipboard: Team Management

### Team Members (Initial Plan)
- **Scrum Master & Product Owner:** [Harrison Johns](https://github.com/johnsh9656)  
- **Frontend Developers:**
  - TBD  
- **Backend Developers:**
  - TBD  
- **Design / UX / ML Support:**
  - TBD

### Team Communication
- **Platform:** Discord  
- **Meeting Schedule:**
  - Sprint Review: Weekly
  - Sprint Retrospective: Weekly
  - Other Meetings: Potential for in-person coding sessions depending on team availability

### Roles and Responsibilities

- **Scrum Master:**
  - Flush out project's boilerplate 
  - Assign tickets to developers
  - Facilitate scrum ceremonies (sprint reviews, retrospectives)
  - Remove impediments
- **Product Owner:**
  - Define product backlog 
  - Prioritize user stories
  - Accept/reject deliverables
- **Developers:**
  - Develop features through ticket completion
  - Create test cases to for feature/ticket acceptance
  - Thoroughly document code and features through pull requests and README docs
  - Execute tests
  - Report defects

### Collaboration Tools
We will be using GitHub Projects as a way to organize our project as use of this system will make it easy for us to adhere to the Scrum framework. We will use a Kanban Board style system which will allow sprint progress to be easily monitored. Issues will be assigned to developers, and are expected to be completed by a designated due date. Developers will work in a branch, then submit a pull request to be reviewed by the Scrum Master before being merged to the main branch, ultimately closing the respective issue. 

### Code Acceptance: The Definition of Done

Below we define the Definition of Done for this project, i.e. what needs to the included in a pull request for the pull request to be accepted by the Product Owner:
- Code Complete (satisfies feature associated to the ticket)
- Passed Code Review by Scrum Master
- Passed Unit Tests/Other testing developed for the feature
- Documentation Updated (Sufficient Commenting)
- Ready to be integrated with Main Branch (no merge conflicts)

---

## :athletic_shoe: Sprint Planning

| Sprint | Focus |
|--------|-------|
| **Sprint 1 (Phase 1 – MVP)** | - Set up repo, folder structure, mobile skeleton (React Native or Expo) <br> - Design core event card UI & static timeline <br> - Initialize database (Firebase/Supabase) |
| **Sprint 2 (Phase 1 – MVP)** | - Static or lightly dynamic map view <br> - Event detail modal/pages <br> - Add curated static events (manual input or JSON) |
| **Sprint 3 (Phase 1–2 Bridge)** | - Basic scraping/curation from 2–3 local sources (IG, record shops) <br> - Implement event submission form (internal/admin-only for now) <br> - Start integrating Google Maps SDK |
| **Sprint 4 (Phase 2 – Accounts & Filters)** | - Add email/password or Google login (Firebase Auth) <br> - Save/share event bookmarks per user <br> - Implement genre/venue/date filters |
| **Sprint 5 (Phase 3 – Personalization & Discovery)** | - Set up vector store (e.g. ChromaDB or Pinecone) <br> - Generate embeddings for event titles/descriptions <br> - Implement basic personalized sort/match pipeline |
| **Sprint 6 (Phase 4 – Polish & Admin Tools)** | - Web-based admin tool for approving/moderating events <br> - UX polish, animations, transitions <br> - Cleanup, bug fixing, and internal demo/deploy prep |

---

## 📌 Notes
- This file will evolve as the team grows and planning continues.

### Additional Information & Resources

*Here is some additional information on Sprint Planning and the Scrum Framework!*
- *[Atlassian: Sprint Planning](https://www.atlassian.com/agile/scrum/sprint-planning#:~:text=What%20is%20sprint%20planning%3F,with%20the%20whole%20scrum%20team.)*
- *[Scrum in 20 mins](https://www.youtube.com/watch?v=SWDhGSZNF9M&ab_channel=CodexCommunity)*

