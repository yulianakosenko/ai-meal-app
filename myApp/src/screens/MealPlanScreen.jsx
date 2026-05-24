import React from "react";

import { FlatList, StyleSheet, Text, View } from "react-native";

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

      <FlatList
        data={mealDays}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.noticeStrip}>
            <Text style={styles.noticeText}>
              Balanced meals based on your nutrition goal and calorie intake
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <MealDayCard meals={item.meals} title={item.title} />
        )}
      />

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

  listContent: {
    paddingHorizontal: SPACING.md,

    paddingTop: SPACING.sm,

    paddingBottom: 240,

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
    position: "absolute",

    left: 0,
    right: 0,
    bottom: 92,

    paddingHorizontal: SPACING.md,

    backgroundColor: "transparent",
  },
});
