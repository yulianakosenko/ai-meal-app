import { ScrollView, FlatList, StyleSheet, Text, View } from "react-native";

import AppStatusBar from "../components/AppStatusBar";
import BottomTabBar from "../components/BottomTabBar";
import MealDayCard from "../components/MealDayCard";
import PrimaryButton from "../components/PrimaryButton";
import ScreenHeader from "../components/ScreenHeader";

import { COLORS, SPACING } from "../constants/theme";

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
            Balanced meals based on your nutrition goal and calorie intake
          </Text>
        </View>

        <FlatList
          data={mealDays}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <MealDayCard meals={item.meals} title={item.title} />
          )}
        />
      </ScrollView>

      <View style={styles.buttonSection}>
        <PrimaryButton
          title="Generate Shopping List"
          onPress={() => setScreen("shopping")}
        />
      </View>

      <BottomTabBar activeTab="meal" onTabPress={setScreen} tabs={tabs} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: "100%",

    backgroundColor: COLORS.background,
  },

  scrollContent: {
    paddingHorizontal: SPACING.md,

    paddingTop: SPACING.sm,

    paddingBottom: 140,

    gap: SPACING.md,

    backgroundColor: COLORS.background,
  },

  noticeStrip: {
    backgroundColor: COLORS.primarySoft,

    borderRadius: 22,

    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,

    marginBottom: SPACING.md,
  },

  noticeText: {
    color: COLORS.primaryDark,

    fontSize: 15,

    lineHeight: 24,

    fontWeight: "600",
  },

  buttonSection: {
    paddingHorizontal: SPACING.md,

    paddingTop: SPACING.sm,

    paddingBottom: SPACING.lg,

    backgroundColor: COLORS.background,
  },
  listContent: {
    paddingTop: SPACING.md,
    paddingBottom: 120,
  },
});
