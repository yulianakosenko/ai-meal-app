import { ScrollView, StyleSheet, Text, View } from "react-native";

import AppStatusBar from "../components/AppStatusBar";
import BottomTabBar from "../components/BottomTabBar";
import ScreenHeader from "../components/ScreenHeader";

import { COLORS, SHADOW, SPACING } from "../constants/theme";

import { tabs } from "../data/mockData";

export default function SummaryScreen({ setScreen }) {
  return (
    <View style={styles.container}>
      <AppStatusBar />

      <ScreenHeader title="Summary" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroCard}>
          <Text style={styles.heroLabel}>Weekly Nutrition Score</Text>

          <Text style={styles.heroScore}>92%</Text>

          <Text style={styles.heroText}>
            Your meal plan is balanced and optimized for healthy nutrition and
            calorie goals.
          </Text>
        </View>

        <View style={styles.row}>
          <View style={styles.smallCard}>
            <Text style={styles.cardLabel}>Calories</Text>

            <Text style={styles.cardValue}>1800</Text>

            <Text style={styles.cardSub}>per day</Text>
          </View>

          <View style={styles.smallCard}>
            <Text style={styles.cardLabel}>Budget</Text>

            <Text style={styles.cardValue}>€70</Text>

            <Text style={styles.cardSub}>weekly</Text>
          </View>
        </View>

        <View style={styles.largeCard}>
          <Text style={styles.largeTitle}>AI Recommendation</Text>

          <Text style={styles.largeText}>
            Increase protein intake slightly and maintain hydration for better
            energy and recovery throughout the week.
          </Text>
        </View>
      </ScrollView>

      <BottomTabBar activeTab="summary" onTabPress={setScreen} tabs={tabs} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: COLORS.background,
  },

  scrollContent: {
    paddingHorizontal: SPACING.md,

    paddingTop: SPACING.sm,

    paddingBottom: 140,
  },

  heroCard: {
    backgroundColor: COLORS.primary,

    borderRadius: SPACING.xl,

    padding: SPACING.xl,

    marginBottom: SPACING.lg,
  },

  heroLabel: {
    color: "#DFF7E7",

    fontSize: 15,

    marginBottom: SPACING.sm,
  },

  heroScore: {
    fontSize: 54,

    fontWeight: "700",

    color: COLORS.white,

    marginBottom: SPACING.sm,
  },

  heroText: {
    fontSize: 16,

    lineHeight: 28,

    color: "#F4FFF7",
  },

  row: {
    flexDirection: "row",

    gap: SPACING.md,

    marginBottom: SPACING.lg,
  },

  smallCard: {
    flex: 1,

    backgroundColor: COLORS.surface,

    borderRadius: SPACING.xl,

    padding: SPACING.lg,

    ...SHADOW,
  },

  cardLabel: {
    fontSize: 15,

    color: COLORS.textMuted,

    marginBottom: SPACING.sm,
  },

  cardValue: {
    fontSize: 34,

    fontWeight: "700",

    color: COLORS.text,

    marginBottom: 6,
  },

  cardSub: {
    fontSize: 14,

    color: COLORS.textMuted,
  },

  largeCard: {
    backgroundColor: COLORS.surface,

    borderRadius: SPACING.xl,

    padding: SPACING.xl,

    ...SHADOW,
  },

  largeTitle: {
    fontSize: 22,

    fontWeight: "700",

    color: COLORS.text,

    marginBottom: SPACING.md,
  },

  largeText: {
    fontSize: 16,

    lineHeight: 28,

    color: COLORS.textMuted,
  },
});
