import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { COLORS, SHADOW } from "../constants/theme";

const { width } = Dimensions.get("window");

const mealImages = {
  Breakfast: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",

  Lunch: "https://images.unsplash.com/photo-1547592180-85f173990554",

  Dinner: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
};

export default function MealDayCard({ meals, title }) {
  return (
    <View style={styles.dayContainer}>
      <Text style={styles.dayTitle}>{title}</Text>

      {meals.map((meal, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri:
                  mealImages[meal.type] ||
                  "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
              }}
              style={styles.image}
            />

            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.45)"]}
              style={styles.overlay}
            />

            <View style={styles.imageContent}>
              <Text style={styles.imageType}>{meal.type}</Text>

              <Text style={styles.imageTitle}>{meal.name}</Text>
            </View>
          </View>

          <View style={styles.content}>
            <View style={styles.infoRow}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{meal.kcal} kcal</Text>
              </View>

              <Text style={styles.grams}>{meal.grams} g</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  dayContainer: {
    marginBottom: 32,
  },

  dayTitle: {
    fontSize: 28,

    fontWeight: "700",

    color: COLORS.text,

    marginBottom: 18,
  },

  card: {
    // Dynamic width for responsive layout
    width: width - 40,

    backgroundColor: COLORS.surface,

    borderRadius: 32,

    overflow: "hidden",

    marginBottom: 22,

    ...SHADOW,
  },

  imageContainer: {
    position: "relative",
  },

  image: {
    width: "100%",
    height: 240,
  },

  overlay: {
    position: "absolute",

    left: 0,
    right: 0,
    bottom: 0,

    height: 140,
  },

  imageContent: {
    position: "absolute",

    left: 22,
    right: 22,
    bottom: 22,
  },

  imageType: {
    color: "#DDF7E7",

    fontSize: 13,

    fontWeight: "700",

    marginBottom: 8,
  },

  imageTitle: {
    color: COLORS.white,

    fontSize: 26,

    lineHeight: 32,

    fontWeight: "700",
  },

  content: {
    padding: 22,
  },

  infoRow: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  badge: {
    backgroundColor: COLORS.primarySoft,

    borderRadius: 999,

    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  badgeText: {
    color: COLORS.primaryDark,

    fontSize: 13,

    fontWeight: "700",
  },

  grams: {
    fontSize: 15,

    color: COLORS.textMuted,

    fontWeight: "600",
  },
});
