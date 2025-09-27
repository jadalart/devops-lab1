# DevOps Lab Full-Stack App

## Description
This is a small e-commerce like full-stack application built for DevOps practice. 
It has a **React frontend** with Vite and a **Node.js backend** with Express.

## Folder Structure
devops-lab1/
├── frontend/ # React + Vite frontend
├── backend/ # Node.js + Express backend
└── README.md


## Installation

### Frontend
```bash
cd frontend
npm install
npm run dev -- --host

### Backend
```bash

cd backend
npm install
node index.js

### Uasge
Open frontend at http://localhost:3000 or via ngrok URL for mobile access.

Backend API endpoints:

GET /products → returns all product items

### Challenges / Notes
Node.js version issues with Vite → upgraded to Node 20.x

Missing @vitejs/plugin-react → installed manually

Git conflicts and embedded repos → solved using proper branch structure

ngrok used for testing frontend on mobile

### Future Improvements
Add user login/auth

Add cart and checkout features

Connect to real database


---

## **Step 3: Commit README.md**

```bash
git add README.md
git commit -m "Add detailed README for frontend and backend"
git push origin main   # Or your main branch









