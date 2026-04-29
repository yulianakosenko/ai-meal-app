import { StyleSheet, Text, View } from "react-native";
import { COLORS, RADII, SHADOW } from "../constants/theme";

export default function MealDayCard({ meals, title }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      {meals.map((meal, index) => (
        <View key={index} style={styles.mealItem}>
          <Text style={styles.mealType}>{meal.type}</Text>

          <Text style={styles.mealName}>{meal.name}</Text>

          <Text style={styles.mealInfo}>
            {meal.grams}g • {meal.kcal} kcal
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: RADII.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
    paddingHorizontal: 9,
    paddingTop: 9,
    paddingBottom: 8,
    ...SHADOW,
  },
  title: {
    color: COLORS.primaryDark,
    fontSize: 9,
    lineHeight: 14,
    fontWeight: "600",
    marginBottom: 2,
  },
  mealItem: {
    marginTop: 6,
  },

  mealType: {
    fontSize: 8,
    color: COLORS.textMuted,
  },

  mealName: {
    fontSize: 9,
    color: COLORS.textStrong,
    fontWeight: "600",
  },

  mealInfo: {
    fontSize: 8,
    color: COLORS.textMuted,
  },
});
