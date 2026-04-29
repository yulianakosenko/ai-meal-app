export const generateMealPlanAI = async (input) => {
  try {
    const response = await fetch("http://localhost:3000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Frontend AI error:", error);
    return [];
  }
};
