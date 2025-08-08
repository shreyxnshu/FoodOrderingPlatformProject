#  Food Ordering Platform — Frontend

A responsive **React** web app for browsing a menu, adding items to a cart, and placing mock orders.  
This is the **frontend-only** part of the project — backend and database integration are not included.

---

## 🚀 Live Demo



---

## 🛠 Tech Stack

- **React 18** — Component-based UI
- **Vite** — Fast build tool
- **CSS** — Styling using regular CSS files
- **React Router DOM** — Page routing
- **React Context API (StoreContext)** — Global state management


---

## 📂 Features

- Browse menu items by category
- Add/remove items from cart
- Grid layout
- Checkout form with minimal validation


---

## 📂 Folder Structure
frontend/
├── public/ # Static assets
├── src/
│ ├── assets/ # Images, icons
│ ├── components/ # Reusable UI parts
│ ├── pages/ # Routed views
│ ├── context/ # StoreContext (React Context API)
│ ├── styles/ # CSS files for styling
│ ├── App.jsx # Main app component
│ ├── index.css # Global CSS
│ └── main.jsx # React root
└── package.json

## 🖥️ Installation & Run Locally

```bash
# Clone the repo
git clone https://github.com/shreyxnshu/FoodOrderingPlatformProject.git
cd FoodOrderingPlatformProject/frontend

# Install dependencies
npm install

# Run development server
npm run dev
