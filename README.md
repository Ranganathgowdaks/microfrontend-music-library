# 🎧 Microfrontend Music Library

This is a role-based Music Library web application built using **Micro Frontend Architecture**, **React**, and **Vite**. It demonstrates dynamic integration using **Module Federation**, supports filtering, sorting, and role-based controls for managing songs.

---

## 🔧 Features

- 🎶 View, filter, sort, and group songs by **title**, **album**, or **artist**
- 👥 **Role-based access**:  
  - `admin` can view, filter, **add**, and **delete** songs  
  - `user` can only view and filter
- 🧩 Built with **Micro Frontends** using **Module Federation**
- ⚡ Fast builds and dev setup with **Vite**
- 📦 Clean UI with **responsive design** using **CSS Modules**
- ✅ No backend required – all data is in memory using `Context API`

---

## 🏗️ Architecture

This project follows a **Micro Frontend setup** with:

### 1. Host App (`host/`)
- The main container
- Handles auth and layout
- Loads the Music Library remotely

### 2. Music Library (`music-lib/`)
- Remote app containing all music-related features
- Exposed via Module Federation

/music-mfe-workspace
├── host/ ← Main App (Container)
│ ├── src/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── context/AuthContext.jsx
│ └── vite.config.js
│
├── music-lib/ ← Remote Micro Frontend
│ ├── src/
│ │ ├── MusicLibrary.jsx
│ │ ├── context/SongContext.jsx
│ │ └── components/
│ │ ├── AddSongForm.jsx
│ │ ├── DeleteButton.jsx
│ │ ├── FilterSortGroupControls.jsx
│ │ └── SongList.jsx
│ └── vite.config.js

---

## 🔐 Roles & Demo Credentials

No actual login is required. You can choose the role from a dropdown in the UI:

| Role  | Permissions |
|-------|-------------|
| admin | View, filter, **add**, and **delete** songs |
| user  | View and filter only |

The role is stored in localStorage using a simple in-memory JWT simulation.

---

## 📦 Dependencies (Install in both `host/` and `music-lib/`)

```bash
npm install react react-dom
npm install -D vite @vitejs/plugin-react
npm install vite-plugin-federation
🧪 How to Run Locally
Step 1: Clone the Repository
bash
Copy
Edit
git clone https://github.com/Ranganathgowdaks/microfrontend-music-library.git
cd microfrontend-music-library
Step 2: Start the Remote App (music-lib)
bash
Copy
Edit
cd music-lib
npm install
npm run dev
Runs on: http://localhost:5000

Ensure this in vite.config.js:

js
Copy
Edit
server: {
  port: 5000,
}
Step 3: Start the Host App (host)
bash
Copy
Edit
cd ../host
npm install
npm run dev
Runs on: http://localhost:5001

Ensure remote is linked:

js
Copy
Edit
remotes: {
  musicLib: "http://localhost:5000/assets/remoteEntry.js"
}
🌍 Deployment Instructions
Deploy both apps independently using Vercel, Netlify, or similar platforms.

💡 Update the host vite.config.js remote path to point to the deployed music-lib:

js
Copy
Edit
remotes: {
  musicLib: "https://your-music-lib-app.vercel.app/assets/remoteEntry.js"
}
🔧 Module Federation Explained
music-lib exposes MusicLibrary as a remote module using vite-plugin-federation

host dynamically loads this remote during runtime

This allows both apps to be built, deployed, and scaled independently

🔐 Authentication System
Mock JWT implementation with localStorage

Role (admin or user) is persisted

AuthContext provides login/logout functionality and is shared across the host

🧠 Built With
🛠 React (Functional Components + Hooks)

⚡ Vite

🎯 Module Federation (vite-plugin-federation)

🎨 CSS Modules (responsive and clean)

🧠 Context API (for songs and auth state)

