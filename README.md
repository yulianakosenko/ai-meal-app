# 🍽️ AI Meal Planner – React Native Components

Проєкт створений у межах домашнього завдання з метою реалізації базових UI компонентів у React Native на основі попередньо розробленого дизайну у Figma.

---

## 🎯 Мета роботи

* Реалізувати ключові компоненти інтерфейсу
* Застосувати стилізацію через Flexbox
* Забезпечити адаптивність під різні екрани
* Використати модульну архітектуру та пропси

---

## 🧩 Основні компоненти

У проєкті реалізовано такі компоненти:

* **PrimaryButton** — кнопка з можливістю передачі тексту та дії
* **ScreenHeader** — заголовок екрану
* **BottomTabBar** — нижня навігація
* **ProcessingSpinner** — індикатор завантаження
* **MealDayCard** — картка з денним планом харчування
* **ShoppingItem** — елемент списку покупок
* **SummaryInsightCard** — аналітична картка

---

## ⚙️ Приклади використання пропсів

```jsx
<PrimaryButton 
  title="Generate Plan" 
  onPress={handleGenerate} 
/>

<MealDayCard 
  day="Monday" 
  meals={data.meals} 
/>
```

Компоненти є гнучкими та перевикористовуваними завдяки пропсам.

---

## 🎨 Стилізація

* Використано `StyleSheet.create()`
* Побудова layout через Flexbox:

  * `flexDirection`
  * `justifyContent`
  * `alignItems`
* Централізована система кольорів:

```js
COLORS.primary
COLORS.surface
COLORS.textMuted
```

* Дотримано єдиної системи відступів та типографіки

---

## 📱 Адаптивність

Для адаптації інтерфейсу використано:

```jsx
import { useWindowDimensions } from "react-native";

const { width } = useWindowDimensions();

<View style={{ width: width * 0.9 }} />
```

* Компоненти коректно відображаються на різних розмірах екранів
* Протестовано вертикальну орієнтацію

Також використано платформо-залежні стилі:

```js
Platform.select({
  ios: { paddingTop: 20 },
  android: { paddingTop: 10 },
})
```

---

## 🏗️ Архітектура

Проєкт має модульну структуру:

```bash
src/
├── components/
│   ├── PrimaryButton.jsx
│   ├── ScreenHeader.jsx
│   ├── BottomTabBar.jsx
│   ├── MealDayCard.jsx
│   └── ...
│
├── screens/
├── utils/
├── data/
└── constants/
```

* Кожен компонент винесений в окремий файл
* Використано пропси для динамічних даних
* Відсутні жорстко закодовані значення (magic numbers)

---

## 📸 Screenshots компонентів

> (додайте скріншоти з додатку)

* Button
* Card
* List
* Header
* Navigation

---

## 🚀 Запуск проєкту

```bash
cd myApp
npm install
npx expo start
```

---

## 📌 Висновок

У процесі виконання завдання було:

* реалізовано базові UI компоненти React Native
* застосовано стилізацію через Flexbox
* забезпечено адаптивність інтерфейсу
* побудовано модульну архітектуру

Це дозволило створити масштабований та перевикористовуваний інтерфейс.

---

## 👩‍💻 Автор

Yuliya Kostenko
