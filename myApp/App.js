import { useState } from "react";
import { SafeAreaView } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import ProcessingScreen from "./src/screens/ProcessingScreen";
import MealPlanScreen from "./src/screens/MealPlanScreen";
import ShoppingScreen from "./src/screens/ShoppingScreen";
import SummaryScreen from "./src/screens/SummaryScreen";
import HistoryScreen from "./src/screens/HistoryScreen";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [data, setData] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {screen === "home" && (
        <HomeScreen setScreen={setScreen} setData={setData} />
      )}

      {screen === "processing" && (
        <ProcessingScreen setScreen={setScreen} setData={setData} data={data} />
      )}

      {screen === "meal" && (
        <MealPlanScreen data={data} setScreen={setScreen} />
      )}

      {screen === "shopping" && (
        <ShoppingScreen data={data} setScreen={setScreen} />
      )}

      {screen === "summary" && (
        <SummaryScreen data={data} setScreen={setScreen} />
      )}

      {screen === "history" && <HistoryScreen setScreen={setScreen} />}
    </SafeAreaView>
  );
}
