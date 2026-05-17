import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "meal_history";

export async function saveMealPlan(plan) {
  try {
    const existing = await AsyncStorage.getItem(STORAGE_KEY);

    const parsed = existing ? JSON.parse(existing) : [];

    const updated = [
      {
        id: Date.now(),

        title: "AI Meal Plan",

        calories: plan?.calories || "1800",

        days: plan?.days || "7",

        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      },

      ...parsed,
    ];

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.log(error);
  }
}

export async function getMealHistory() {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);

    return [];
  }
}

export async function deleteMealPlan(id) {
  try {
    const existing = await AsyncStorage.getItem(STORAGE_KEY);

    const parsed = existing ? JSON.parse(existing) : [];

    const updated = parsed.filter((item) => item.id !== id);

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.log(error);
  }
}
