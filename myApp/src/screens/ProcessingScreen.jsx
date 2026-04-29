import { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

import AppStatusBar from "../components/AppStatusBar";
import BottomTabBar from "../components/BottomTabBar";
import ProcessingSpinner from "../components/ProcessingSpinner";
import ScreenHeader from "../components/ScreenHeader";

import { generateMealPlanAI } from "../utils/realAI";
import { COLORS } from "../constants/theme";
import { tabs } from "../data/mockData";
import { savePlan } from "../utils/storage";

export default function ProcessingScreen({ setScreen, data, setData }) {
  useEffect(() => {
    if (!data) return;

    const runAI = async () => {
      try {
        const plan = await generateMealPlanAI(data);

        if (!plan) return;

        savePlan(plan);
        setData(plan);

        setTimeout(() => {
          setScreen("meal");
        }, 1000); // 👈 дає UI пожити
      } catch (err) {
        console.error(err);
      }
    };

    runAI();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <View style={styles.container}>
      <AppStatusBar />
      <ScreenHeader title="AI is creating your plan..." />

      <View style={styles.center}>
        <ProcessingSpinner />
        <Text style={styles.text}>Analyzing your preferences...</Text>
      </View>

      <BottomTabBar activeTab="plan" onTabPress={setScreen} tabs={tabs} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 360,
    width: "100%",
    alignSelf: "center",
    backgroundColor: COLORS.surface,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.canvas,
    gap: 12,
  },

  text: {
    fontSize: 14,
    color: COLORS.textMuted,
  },
});
