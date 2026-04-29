import { ScrollView, StyleSheet, Text, View } from "react-native";

import AppStatusBar from "../components/AppStatusBar";
import BottomTabBar from "../components/BottomTabBar";
import MealDayCard from "../components/MealDayCard";
import PrimaryButton from "../components/PrimaryButton";
import ScreenHeader from "../components/ScreenHeader";

import { COLORS, TYPOGRAPHY } from "../constants/theme";
import { mealDays, tabs } from "../data/mockData";

export default function MealPlanScreen({ setScreen }) {
  return (
    <View style={styles.container}>
      <AppStatusBar />
      <ScreenHeader title="Meal Plan" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.noticeStrip}>
          <Text style={styles.noticeText}>
            Balanced meals based on goal & calorie intake
          </Text>
        </View>

        {mealDays.map((day) => (
          <MealDayCard key={day.id} meals={day.meals} title={day.title} />
        ))}
      </ScrollView>

      <View style={styles.buttonSection}>
        <PrimaryButton
          title="Generate List"
          onPress={() => setScreen("shopping")}
        />
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

  scrollContent: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 20,
    gap: 10,
    backgroundColor: COLORS.canvas,
  },

  noticeStrip: {
    minHeight: 28,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.success,
    backgroundColor: COLORS.successSoft,
    borderRadius: 6,
  },

  noticeText: {
    color: COLORS.successText,
    fontSize: TYPOGRAPHY.tiny,
    fontWeight: "500",
  },

  buttonSection: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    backgroundColor: COLORS.surface,
    padding: 12,
  },
});
