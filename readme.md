# 🧱 AI-Powered Personal Finance Advisor

An intelligent full-stack finance management dashboard that helps users track their income, expenses, category-based budgets, and receive personalized AI-powered spending tips.

---

## 📊 Live Features

| Feature                    | Description                                            |
| -------------------------- | ------------------------------------------------------ |
| ✅ Add/Delete Transactions  | Users can add income or expense entries dynamically    |
| ✅ Category Budget Overview | Real-time spending vs. budget bars per category        |
| ✅ Charts (Pie + Bar)       | Visual insights on expense breakdown and monthly spend |
| ✅ AI Smart Suggestions     | Personalized financial advice based on user data       |
| ✅ Dynamic Budget Input     | Users can set and update their monthly budget          |
| ✅ Mobile Responsive        | Tailwind-powered responsive UI                         |

---

## 🚀 Tech Stack

### ✨ Frontend

* React + TypeScript
* Tailwind CSS
* Vite (for blazing fast builds)

### 🚧 Backend

* Node.js
* Express.js
* MongoDB (via Atlas Cloud) ✨

### 🧠 AI Engine

* Rule-based analysis logic
* Detects high category spending, budget thresholds
* Modular and extensible for ML or OpenAI integration

### ⚖️ Dev Tools

* Postman (for API testing)
* MongoDB Atlas (cloud database)
* Git + GitHub (version control)
* Vercel (for frontend deployment)

---

## 📚 Project Structure

```
finance-advisor/
├── client/           # React + Tailwind frontend
│   ├── components/   # UI components (charts, forms, tips)
│   ├── utils/        # Chart + budget data transformers
│   └── App.tsx       # Main app logic
├── server/           # Express.js backend
│   ├── routes/       # Auth, transactions, advice endpoints
│   ├── models/       # Mongoose models for User, Transaction
│   └── index.js      # Entry point + MongoDB connection
├── ai-engine/        # Rule-based smart advisor logic
├── .env              # Secret config (not committed)
├── README.md         # You're reading it
```

---

## 📃 APIs Overview

### Auth APIs

| Route                | Method | Description                    |
| -------------------- | ------ | ------------------------------ |
| `/api/auth/register` | POST   | Register a new user            |
| `/api/auth/login`    | POST   | Authenticate user & return JWT |

### Transaction APIs

| Route                   | Method | Description             |
| ----------------------- | ------ | ----------------------- |
| `/api/transactions`     | GET    | Get user's transactions |
| `/api/transactions`     | POST   | Add new transaction     |
| `/api/transactions/:id` | DELETE | Delete a transaction    |

### AI Advisor API

| Route         | Method | Description                        |
| ------------- | ------ | ---------------------------------- |
| `/api/advice` | POST   | Analyze transactions & return tips |

---

## 📖 How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/your-username/finance-advisor.git
cd finance-advisor
```

### 2. Install dependencies

```bash
cd client && npm install
cd ../server && npm install
```

### 3. Setup `.env`

Create `server/.env` with:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/finance-app?retryWrites=true&w=majority
```

### 4. Start the app

```bash
# Run backend
cd server
node index.js

# In a new terminal, run frontend
cd client
npm run dev
```

---

## 🚀 Deployment Targets

* Frontend: [Vercel](https://vercel.com)
* Backend: [Render](https://render.com) or [Railway](https://railway.app)

---

## 💡 Future Enhancements

* User login via JWT + token-based protected routes
* MongoDB transaction schema with `userId`
* Charts powered by ML models or OpenAI GPT tips
* Save tips and budget history per user
* Full mobile-first PWA support

---

## 💪 Credits

Built with ❤️ by Saicharan as a full-stack project to showcase modern web development and personal finance innovation.
