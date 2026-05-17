import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

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
    <SafeAreaView style={styles.root}>
      <View style={styles.appWrapper}>
        {screen === "home" && (
          <HomeScreen setScreen={setScreen} setData={setData} />
        )}

        {screen === "processing" && (
          <ProcessingScreen
            setScreen={setScreen}
            setData={setData}
            data={data}
          />
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#EEF2F1",

    alignItems: "center",
  },

  appWrapper: {
    flex: 1,

    width: "100%",
    maxWidth: 430,

    backgroundColor: "#F8FAF8",

    overflow: "hidden",
  },
});
