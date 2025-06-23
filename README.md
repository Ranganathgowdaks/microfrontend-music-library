# 🎧 Microfrontend Music Library

A modular React project demonstrating:

- Micro Frontend Architecture
- Role-based authentication (Admin & User)
- Dynamic loading with Module Federation
- Filtering, sorting, and grouping songs

---

## 🔧 Tech Stack

- **React + Vite**
- **Module Federation (via vite-plugin-federation)**
- **Context API for Auth**
- **Deployed on Vercel (Free Hosting)**

---

## 📂 Project Structure

This project is split into **2 separate apps**:

| App              | Description                        | Hosted Link                                               |
|------------------|------------------------------------|-----------------------------------------------------------|
| **Host App**     | Main app with login & role switch  | [Main App (Host)](https://microfrontend-music-library-host.vercel.app) |
| **Music Library**| Microfrontend loaded by host       | [Music Library (MFE)](https://microfrontend-music-library-p8wg.vercel.app/) |

---

## 🔐 Demo Credentials

| Role   | Permission                 |
|--------|----------------------------|
| `admin`| Can view, add, and delete songs |
| `user` | Can view and filter songs only  |

> Just select role from dropdown and press **Login** (no password/email needed)

---

## ▶️ How to Run Locally

> Make sure you have **Node.js v16+** installed.

### 1️⃣ Clone the Repos (Host & Music Library)

```bash
git clone https://github.com/<your-username>/microfrontend-music-library-host.git
git clone https://github.com/<your-username>/microfrontend-music-library-lib.git
2️⃣ Install Dependencies
In both folders (host and lib), run:
npm install
3️⃣ Build the Music Library
npm run build
This generates the dist folder required for the host to load remote modules.

4️⃣ Run Both Apps Locally
Open two terminals:

In Terminal 1 (Music Library - Port 5001):
cd microfrontend-music-library-lib
npm run dev
In Terminal 2 (Host App - Port 3000):
Update the vite.config.js in host app to load the remote from localhost:
remotes: {
  musicLib: "http://localhost:5001/assets/remoteEntry.js"
}
Then:
cd microfrontend-music-library-host
npm run dev
🚀 Deployment Steps (Vercel)
Push both projects to two separate GitHub repositories

Deploy both on Vercel:

Set npm run build as build command

Use dist as output directory

In Host’s vite.config.js, point remote to production URL:

remotes: {
  musicLib: "https://microfrontend-music-library-lib.vercel.app/assets/remoteEntry.js"
}
Add vercel.json in lib with CORS headers:

json
Copy
Edit
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        { "key": "Access-Control-Allow-Methods", "value": "GET,OPTIONS" },
        { "key": "Access-Control-Allow-Headers", "value": "*" }
      ]
    }
  ]
}
📌 Features
🎶 Clean UI to view songs

🔍 Filter, sort, and group by Album / Artist / Title

🔐 Role-based UI (Admin can Add/Delete, User can only View)

🧩 Microfrontend loaded via Module Federation

