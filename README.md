# 🎒 Lost & Found Portal (Ongoing Project)  

This is an **ongoing Major Project**: a web-based **Lost & Found system for college campuses**.  
The idea is to allow students to **report, search, and recover lost items** in a simple, cloud-enabled portal.  

We are currently working on the **frontend (Next.js + TailwindCSS)** and will later integrate the backend, database, and cloud deployment.  

---

## 🚧 Project Status  

- ✅ Project idea finalized  
- ✅ Initial frontend setup (Next.js + TailwindCSS)  
- 🔄 Designing core pages (Home, Navbar, Footer)  
- ⏳ Backend (Node.js / FastAPI) → To be developed  
- ⏳ Database (MySQL / MongoDB) → Planned  
- ⏳ Cloud Deployment (AWS/Docker) → Planned  

---

## ✨ Planned Features  

- 🖥️ **Modern UI** with Next.js + TailwindCSS  
- 🔑 **Authentication**: Secure login for students & admins  
- 📸 **Image Upload** for lost/found items  
- 🔍 **Search & Filter** to easily find items  
- 📢 **Notifications** via email/SMS when items match  
- ☁ **Cloud Ready**: Dockerized, deployable on AWS/Azure/GCP  
- 🤖 **Optional AI Matching** using image/text recognition  

---

## 🏗️ Current Project Structure  

```bash
lost-found-portal/
│── app/                # Next.js App Router pages
│   ├── components/     # Navbar, Footer (in progress)
│   ├── page.jsx        # Home Page (in progress)
│── public/             # Static files (GIFs, images, icons)
│── package.json        # Dependencies
│── README.md           # Project documentation
```
## 🚀 Getting Started (Development)
### 1️⃣ Clone the repo
```bash 
git clone https://github.com/harshitabisht05/frontend_lostandfound.git
cd frontend_lostandfound
```
### 2️⃣ Make `.env.local` file
```bash
# Backend API URL
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

### 3️⃣ Install dependencies
```bash
npm install
```

### 4️⃣ Run the dev server
```bash
npm run dev

Now open http://localhost:3000 🎉
```

## 📦 Future Deployment Plan

- Docker → Containerize app for portability
- Vercel → Initial frontend deployment
- AWS (EC2, RDS, S3, Cognito) → Full deployment
- Kubernetes → For scaling in larger environments

## 👨‍💻 Tech Stack

- Frontend: Next.js 14, React, TailwindCSS
- Backend : Node.js
- Database :MongoDB
- Cloud (Planned): AWS (EC2, RDS, S3, Cognito), Docker, Kubernetes

## 📅 Roadmap

- ✅ Project setup with Next.js + TailwindCSS
- ✅ Navbar + Footer
- ✅ Page content
- ✅ Authentication system
- ✅ Report Lost / Found form
- ✅ Database integration
- ⌛Cloud deployment
- ⌛Notifications & AI matching

## 📜 License

This project will be licensed under the MIT License once released.

## 🎯 Why this project?

Lost & Found portals exist in big organizations but are often missing in campuses.
This project aims to solve a real-world student problem while showcasing skills in Cloud Computing & Virtualization.
It’s currently under development as a Major Project.

## Teammates
- Harshita Bisht
- Sneha Singh
- Pradyuman Singh
- Himanshu P