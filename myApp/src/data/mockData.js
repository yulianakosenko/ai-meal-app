export const nutritionGoals = [
  { id: "weight-loss", label: "Weight loss", active: true },
  { id: "weight-gain", label: "Weight gain", active: false },
  { id: "muscle", label: "Muscle", active: false },
  { id: "balanced", label: "Balanced", active: false },
];

export const mealDays = [
  {
    id: "day-1",
    title: "Monday",
    meals: [
      { type: "Breakfast", name: "Omelette", grams: 250, kcal: 400 },
      { type: "Lunch", name: "Chicken rice", grams: 400, kcal: 700 },
      { type: "Dinner", name: "Salad bowl", grams: 320, kcal: 550 },
    ],
  },
  {
    id: "day-2",
    title: "Tuesday",
    meals: [
      { type: "Breakfast", name: "Oatmeal", grams: 220, kcal: 350 },
      { type: "Lunch", name: "Turkey pasta", grams: 380, kcal: 720 },
      { type: "Dinner", name: "Greek salad", grams: 300, kcal: 520 },
    ],
  },
  {
    id: "day-3",
    title: "Wednesday",
    meals: [
      { type: "Breakfast", name: "Yogurt bowl", grams: 200, kcal: 300 },
      { type: "Lunch", name: "Pasta", grams: 360, kcal: 680 },
      { type: "Dinner", name: "Vegetable soup", grams: 340, kcal: 480 },
    ],
  },
];

export const shoppingItems = [
  { id: "chicken", name: "Chicken", details: "800g - 6EUR", checked: true },
  { id: "rice", name: "Rice", details: "1kg - 3EUR", checked: true },
  { id: "eggs", name: "Eggs", details: "12 pcs - 4EUR", checked: false },
  { id: "vegetables", name: "Vegetables", details: "1.5kg - 5EUR", checked: false },
];

export const summaryCards = [
  { id: "spent", label: "Spent", value: "48EUR", positive: false },
  { id: "saved", label: "Saved", value: "22EUR", positive: true },
];

export const tabs = [
  { id: "home", label: "Home", icon: "home" },
  { id: "meal", label: "Plan", icon: "plan" },
  { id: "shopping", label: "Shopping", icon: "list" },
  { id: "summary", label: "Summary", icon: "summary" },
  { id: "history", label: "History", icon: "summary" },
];
