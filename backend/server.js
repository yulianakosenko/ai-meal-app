const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// якщо у тебе Node <18 — розкоментуй:
// const fetch = require("node-fetch");

app.post("/generate", async (req, res) => {
  try {
    const { input } = req.body;

    if (!input) {
      return res.status(400).json({ error: "Missing input" });
    }

    const prompt = `
Create a ${input.days}-day meal plan.

User parameters:
- Budget: ${input.budget} €
- Number of people: ${input.people}
- Calories per day (per person): ${input.calories}
- Goal: ${input.goal}

STRICT REQUIREMENTS:
- Each day MUST include exactly 3 meals:
  1. Breakfast
  2. Lunch
  3. Dinner
- The plan MUST be calculated for ONE person only
- Each meal must include:
  - name
  - calories (kcal)
  - weight in grams
- Total daily calories should be close to ${input.calories}
- Meals should be realistic and simple

OUTPUT FORMAT:
Return ONLY valid JSON.

[
  {
    "title": "Day 1",
    "meals": [
      { "type": "Breakfast", "name": "Meal", "kcal": 400, "grams": 250 },
      { "type": "Lunch", "name": "Meal", "kcal": 700, "grams": 400 },
      { "type": "Dinner", "name": "Meal", "kcal": 600, "grams": 350 }
    ]
  }
]
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.OPENAI_API_KEY,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    // 🔍 перевірка відповіді
    if (!data.choices || !data.choices[0]) {
      console.log("Bad AI response:", data);
      return res.status(500).json({ error: "AI response invalid" });
    }

    const text = data.choices[0].message.content;

    // 🔍 витягуємо JSON
    const jsonStart = text.indexOf("[");
    const jsonEnd = text.lastIndexOf("]") + 1;

    if (jsonStart === -1 || jsonEnd === -1) {
      console.log("Invalid JSON format:", text);
      return res.status(500).json({ error: "Invalid AI format" });
    }

    const jsonString = text.slice(jsonStart, jsonEnd);

    let result;

    try {
      result = JSON.parse(jsonString);
    } catch (err) {
      console.log("Parse error:", err);
      return res.status(500).json({ error: "JSON parse failed" });
    }

    res.json(result);
  } catch (error) {
    console.log("Server error:", error);
    res.status(500).json({ error: "Server failed" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
