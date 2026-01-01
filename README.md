📧 Email Marketing Dashboard (React + CSS)

A modern Email Marketing Dashboard built with React.js using plain CSS (no Tailwind).
The project demonstrates a scalable, maintainable, and reusable component architecture suitable for real-world dashboards.

🚀 Features

📊 Dashboard with campaign statistics

📬 Campaign management (list + create)

👥 Contacts management

⚙️ Settings page

♻️ Reusable UI components (cards, badges, tables)

🎨 Plain CSS styling (no Tailwind dependency)

🧩 Clean separation of pages, components, and data

🛠 Tech Stack

React.js (CRA)

JavaScript (ES6+)

Plain CSS

Lucide React (icons)

Recharts (charts – optional)

📁 Project Structure
my-dashboard/
├─ public/
│   └─ index.html
├─ src/
│   ├─ components/
│   │   ├─ StatCard.jsx
│   │   ├─ StatusBadge.jsx
│   │   └─ ContactStatusBadge.jsx
│   │
│   ├─ pages/
│   │   ├─ Dashboard.jsx
│   │   ├─ Campaigns.jsx
│   │   ├─ CreateCampaign.jsx
│   │   ├─ Contacts.jsx
│   │   └─ Settings.jsx
│   │
│   ├─ data/
│   │   ├─ campaigns.js
│   │   └─ contacts.js
│   │
│   ├─ App.jsx
│   ├─ index.js
│   └─ index.css
│
├─ package.json
└─ README.md

🧠 Architecture Explanation
🔹 Pages (/pages)

Represent full screens (Dashboard, Campaigns, Contacts, etc.)

Handle layout and data rendering

Use reusable components

🔹 Components (/components)

Reusable UI blocks

Examples:

StatCard → Dashboard metrics

StatusBadge → Campaign & contact status

Helps avoid duplication and improves maintainability

🔹 Data (/data)

Mock/static data stored separately

Easy to replace with APIs later

🔹 Styling (index.css)

Centralized CSS

No Tailwind or external UI framework

Class-based styling for consistency

📦 Installation & Setup
1️⃣ Create React App
npx create-react-app my-dashboard
cd my-dashboard

2️⃣ Install Dependencies
npm install lucide-react recharts


recharts is optional if you want charts.

3️⃣ Replace Files

Replace the src/ folder with the provided structure

Add index.css

Update App.jsx and pages

4️⃣ Start Development Server
npm start


The app will run at:
👉 http://localhost:3000

🎨 Styling Approach

Tailwind CSS classes were fully converted to plain CSS

Benefits:

No build configuration

Easy debugging

Works in any React environment

All styles live in src/index.css

♻️ Reusability & Scalability

✔ Easy to add new pages
✔ Easy to add new components
✔ CSS is reusable and centralized
✔ Clean code separation
✔ Production-ready structure

🔮 Future Enhancements

API integration (backend / REST)

Authentication (Login / Signup)

Pagination & search

Dark mode

Role-based access

Charts & analytics improvements

👨‍💻 Author

Bharathsingathala
Aspiring Java Full Stack & React Developer

📜 License

This project is for learning and demonstration purposes.
Free to modify and extend 🚀
