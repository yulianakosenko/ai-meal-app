# 🍽️ AI Meal Planner App

Мобільний застосунок, який генерує персоналізований план харчування на основі вподобань користувача за допомогою AI.

---

## 🚀 Опис

AI Meal Planner дозволяє:

* створювати індивідуальний план харчування
* враховувати цілі (схуднення / підтримка / набір маси)
* автоматично генерувати меню за допомогою AI
* переглядати план по днях
* отримувати список покупок

---

## 🧠 Основна ідея

Користувач вводить свої параметри →
AI генерує план →
застосунок показує готовий результат у зручному форматі

---

## 📱 Функціонал

* 🏠 Home — введення параметрів
* ⚙️ Processing — генерація плану (AI)
* 📅 Meal Plan — перегляд меню
* 🛒 Shopping — список продуктів
* 📊 Summary — аналітика

---

## 🛠️ Технології

* React Native (Expo)
* JavaScript / TypeScript
* Node.js (backend)
* AI API

---

## ⚙️ Запуск проєкту

### Backend

```bash
cd backend
npm install
node server.js
```

---

### Frontend

```bash
cd myApp
npm install
npx expo start
```

---

## 🔐 Environment variables

Створи файл `.env` у папці backend:

```env
OPENAI_API_KEY=your_api_key_here
```

⚠️ Файл `.env` не додається в репозиторій

---

## 📁 Структура проєкту

```
ai-meal-app/
│
├── backend/
│   ├── server.js
│   └── package.json
│
├── myApp/
│   ├── src/
│   │   ├── components/
│   │   ├── screens/
│   │   ├── utils/
│   │   └── data/
│   │
│   ├── App.js
│   └── package.json
│
└── README.md
```

---

## 🎯 UX/UI підхід

* простий та інтуїтивний flow
* мінімалістичний дизайн
* фокус на швидкому отриманні результату
* використання готових UI компонентів

---

## 📌 Статус

MVP (Minimum Viable Product)

---

## 👩‍💻 Автор

Yuliya Kostenko
