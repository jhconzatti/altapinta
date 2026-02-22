# 🍔 El Palacio Fast Food - Digital Transformation

![Project Status](https://img.shields.io/badge/Status-Prototype%20%2F%20Sales%20Pitch-orange)
![Tech Stack](https://img.shields.io/badge/Tech-React%20%7C%20Tailwind%20%7C%20Vite-blue)

> A modern, mobile-first frontend solution designed to modernize a local meat distributor and fast-food business in Argentina.

![Project Cover](./cover.png)
## 🎯 Project Background & Objective

**El Palacio** is a traditional local business in Tartagal (Salta, Argentina) comprising a butcher shop, a meat distributor, and a fast-food venue. Despite their strong physical presence and high-quality products, their digital footprint was non-existent (manual orders via phone, no website, low Google visibility).

**The Goal:** To design and develop a high-conversion landing page that serves as a digital menu and ordering system, bridging the gap between their premium physical product and the digital customer experience.

## 🚀 Key Features

* **Mobile-First Design:** Optimized for the 90% of customers who order food via smartphones.
* **Frictionless Ordering (WhatsApp API):** Instead of a complex backend, the cart generates a pre-formatted message sent directly to the restaurant's WhatsApp, aligning with local user behavior in Argentina.
* **Brand Identity Alignment:** Digital translation of their physical branding (Industrial/Street Food vibe) using Dark Mode, Bold Typography, and Appetite Appeal colors.
* **Visual Menu:** High-quality presentation of products (Burgers, Lomitos, Pizzas) replacing PDF menus that are hard to read on mobile.
* **Performance:** Lightning-fast load times using Vite and optimized assets.

## 🛠️ Tech Stack

* **Core:** [React.js](https://reactjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **UI Components:** Custom components based on Shadcn/UI principles (Cards, Buttons, Badges).
* **Deployment:** Vercel / Lovable

## 📸 Screenshots

| Mobile View | Menu Grid | Cart Interaction |
|:---:|:---:|:---:|
| *[Place Screenshot 1]* | *[Place Screenshot 2]* | *[Place Screenshot 3]* |

## 💡 The Business Logic (Why this stack?)

Since the client manages a small team with no IT department, a complex backend with a database would introduce unnecessary friction and maintenance costs. 

I chose a **Stateless Frontend approach**:
1.  **Low Maintenance:** No database to manage.
2.  **Zero Cost Hosting:** Can be hosted on Vercel/Netlify free tiers.
3.  **High Reliability:** Relies on WhatsApp (which they already use) for the "backend" order processing.

## 🔧 How to Run Locally

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/el-palacio-frontend.git](https://github.com/your-username/el-palacio-frontend.git)
    ```
2.  **Install dependencies**
    ```bash
    cd el-palacio-frontend
    npm install
    ```
3.  **Run the development server**
    ```bash
    npm run dev
    ```

## 👨‍💻 Author

**Juliano Conzatti** *Full Stack Developer & Digital Strategist*

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit%20Site-brightgreen)](https://julianoconzatti.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://linkedin.com/in/seu-linkedin)

---
*Note: This project was developed as a strategic proposal to digitize a real-world local business.*
