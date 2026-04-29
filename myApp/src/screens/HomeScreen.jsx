import { useState } from "react";
import { ScrollView, StyleSheet, View, TextInput } from "react-native";

import AppStatusBar from "../components/AppStatusBar";
import BottomTabBar from "../components/BottomTabBar";
import GoalOption from "../components/GoalOption";
import PrimaryButton from "../components/PrimaryButton";
import ScreenHeader from "../components/ScreenHeader";
import SectionCard from "../components/SectionCard";

import { COLORS } from "../constants/theme";
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
      <ScreenHeader title="Smart Grocery" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <SectionCard title="Basic Info">
          <TextInput
            placeholder="Budget (€)"
            value={budget}
            onChangeText={setBudget}
            style={styles.input}
            keyboardType="numeric"
          />

          <View style={styles.row}>
            <TextInput
              placeholder="People"
              value={people}
              onChangeText={setPeople}
              style={[styles.input, styles.half]}
              keyboardType="numeric"
            />

            <TextInput
              placeholder="Days"
              value={days}
              onChangeText={setDays}
              style={[styles.input, styles.half]}
              keyboardType="numeric"
            />
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

          <TextInput
            placeholder="Calories per day"
            value={calories}
            onChangeText={setCalories}
            style={styles.input}
            keyboardType="numeric"
          />
        </SectionCard>
      </ScrollView>

      <View style={styles.buttonSection}>
        <PrimaryButton title="Plan with AI" onPress={handleGenerate} />
      </View>

      <BottomTabBar activeTab="home" onTabPress={setScreen} tabs={tabs} />
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
    padding: 12,
    gap: 10,
    backgroundColor: COLORS.canvas,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    backgroundColor: "#fff",
  },

  half: {
    flex: 1,
  },

  row: {
    flexDirection: "row",
    gap: 8,
  },

  goalGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 10,
  },

  buttonSection: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    padding: 12,
  },
});
