import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import AppStatusBar from "../components/AppStatusBar";
import ScreenHeader from "../components/ScreenHeader";
import BottomTabBar from "../components/BottomTabBar";

import { getPlans } from "../utils/storage";
import { COLORS } from "../constants/theme";
import { tabs } from "../data/mockData";

export default function HistoryScreen({ setScreen }) {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    setPlans(getPlans());
  }, []);

  return (
    <View style={styles.container}>
      <AppStatusBar />
      <ScreenHeader title="History" />

      <ScrollView contentContainerStyle={styles.scroll}>
        {plans.map((plan) => (
          <View key={plan.id} style={styles.card}>
            <Text style={styles.date}>{plan.date}</Text>
            <Text style={styles.text}>{plan.data.length} days meal plan</Text>
          </View>
        ))}
      </ScrollView>

      <BottomTabBar activeTab="history" onTabPress={setScreen} tabs={tabs} />
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

  scroll: {
    padding: 12,
    gap: 10,
  },

  card: {
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
  },

  date: {
    fontWeight: "600",
  },

  text: {
    color: COLORS.textMuted,
  },
});
