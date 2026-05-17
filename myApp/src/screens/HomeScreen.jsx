import { useState } from "react";

import { View, Text, TextInput, StyleSheet } from "react-native";

import { Feather, Ionicons } from "@expo/vector-icons";

import AppStatusBar from "../components/AppStatusBar";
import BottomTabBar from "../components/BottomTabBar";
import GoalOption from "../components/GoalOption";
import PrimaryButton from "../components/PrimaryButton";
import ScreenHeader from "../components/ScreenHeader";
import SectionCard from "../components/SectionCard";

import { COLORS, SPACING } from "../constants/theme";

import { nutritionGoals, tabs } from "../data/mockData";

export default function HomeScreen({ setScreen, setData }) {
  const [budget, setBudget] = useState("");

  const [people, setPeople] = useState("");

  const [days, setDays] = useState("");

  const [calories, setCalories] = useState("");

  const [currentGoals, setCurrentGoals] = useState(nutritionGoals || []);

  const handleGoalPress = (goalId) => {
    setCurrentGoals((prev) =>
      prev.map((goal) => ({
        ...goal,
        active: goal.id === goalId,
      })),
    );
  };

  const handleGenerate = () => {
    const selectedGoal = currentGoals.find((g) => g.active)?.label;

    setData({
      budget,
      people,
      days,
      calories,
      goal: selectedGoal,
    });

    setScreen("processing");
  };

  return (
    <View style={styles.container}>
      <AppStatusBar />

      <ScreenHeader subtitle="AI Nutrition Planner" title="Smart Grocery" />

      <View style={styles.content}>
        <View style={styles.topSection}>
          <SectionCard title="Basic Info">
            <View style={styles.inputWrapper}>
              <Feather
                name="dollar-sign"
                size={24}
                color={COLORS.textMuted}
                style={styles.inputIcon}
              />

              <TextInput
                placeholder="Budget (€)"
                placeholderTextColor={COLORS.textMuted}
                value={budget}
                onChangeText={setBudget}
                style={styles.input}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.row}>
              <View style={[styles.inputWrapper, styles.half]}>
                <Ionicons
                  name="people-outline"
                  size={22}
                  color={COLORS.textMuted}
                  style={styles.inputIcon}
                />

                <TextInput
                  placeholder="People"
                  placeholderTextColor={COLORS.textMuted}
                  value={people}
                  onChangeText={setPeople}
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>

              <View style={[styles.inputWrapper, styles.half]}>
                <Ionicons
                  name="calendar-outline"
                  size={22}
                  color={COLORS.textMuted}
                  style={styles.inputIcon}
                />

                <TextInput
                  placeholder="Days"
                  placeholderTextColor={COLORS.textMuted}
                  value={days}
                  onChangeText={setDays}
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
            </View>
          </SectionCard>

          <SectionCard title="Nutrition Goal">
            <View style={styles.goalGrid}>
              {(currentGoals || []).map((goal) => (
                <GoalOption
                  key={goal.id}
                  active={goal.active}
                  label={goal.label}
                  onPress={() => handleGoalPress(goal.id)}
                />
              ))}
            </View>

            <View style={styles.inputWrapper}>
              <Ionicons
                name="flame-outline"
                size={22}
                color={COLORS.textMuted}
                style={styles.inputIcon}
              />

              <TextInput
                placeholder="Calories per day"
                placeholderTextColor={COLORS.textMuted}
                value={calories}
                onChangeText={setCalories}
                style={styles.input}
                keyboardType="numeric"
              />
            </View>
          </SectionCard>
        </View>

        <View style={styles.bottomSection}>
          <PrimaryButton title="✨ Generate Plan" onPress={handleGenerate} />

          <View style={styles.privacyRow}>
            <Ionicons
              name="lock-closed-outline"
              size={16}
              color={COLORS.textMuted}
            />

            <Text style={styles.privacyText}>
              Your plan is 100% personalized and private
            </Text>
          </View>
        </View>
      </View>

      <BottomTabBar activeTab="home" onTabPress={setScreen} tabs={tabs} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: "100%",

    backgroundColor: COLORS.background,
  },

  content: {
    flex: 1,

    paddingHorizontal: SPACING.md,

    paddingBottom: 118,
  },

  topSection: {
    gap: 16,
  },

  row: {
    flexDirection: "row",

    alignItems: "center",

    gap: 12,
  },

  half: {
    flex: 1,
  },

  inputWrapper: {
    flexDirection: "row",

    alignItems: "center",

    height: 68,

    backgroundColor: COLORS.surface,

    borderRadius: 22,

    paddingHorizontal: 20,

    borderWidth: 1,

    borderColor: "rgba(0,0,0,0.04)",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.03,

    shadowRadius: 18,

    elevation: 3,
  },

  input: {
    flex: 1,

    height: 62,

    fontSize: 16,

    color: COLORS.text,
  },

  inputIcon: {
    marginRight: 12,
  },

  goalGrid: {
    flexDirection: "row",

    flexWrap: "wrap",

    gap: 10,

    marginBottom: 18,
  },

  bottomSection: {
    marginTop: 18,
  },

  privacyRow: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "center",

    gap: 8,
  },

  privacyText: {
    color: COLORS.textMuted,

    fontSize: 14,

    fontWeight: "500",
  },
});
