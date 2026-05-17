import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import { useEffect, useState } from "react";

import AppStatusBar from "../components/AppStatusBar";
import BottomTabBar from "../components/BottomTabBar";
import ScreenHeader from "../components/ScreenHeader";

import { COLORS, SHADOW, SPACING } from "../constants/theme";

import { tabs } from "../data/mockData";

import { getMealHistory, deleteMealPlan } from "../utils/storage";

export default function HistoryScreen({ setScreen }) {
  const [historyPlans, setHistoryPlans] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    const data = await getMealHistory();

    setHistoryPlans(data);
  };

  const handleDelete = async (id) => {
    await deleteMealPlan(id);

    loadHistory();
  };

  return (
    <View style={styles.container}>
      <AppStatusBar />

      <ScreenHeader title="History" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {historyPlans.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>🥗</Text>

            <Text style={styles.emptyTitle}>No meal plans yet</Text>

            <Text style={styles.emptyText}>
              Your generated meal plans will appear here after using the AI
              planner.
            </Text>
          </View>
        ) : (
          historyPlans.map((plan) => (
            <View key={plan.id} style={styles.card}>
              <Image
                source={{
                  uri: plan.image,
                }}
                style={styles.image}
              />

              <View style={styles.content}>
                <Text style={styles.title}>{plan.title}</Text>

                <Text style={styles.meta}>
                  {plan.days} days • {plan.calories} kcal
                </Text>

                <TouchableOpacity
                  onPress={() => handleDelete(plan.id)}
                  style={styles.deleteButton}
                >
                  <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      <BottomTabBar activeTab="history" onTabPress={setScreen} tabs={tabs} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: "100%",

    maxWidth: 520,

    alignSelf: "center",

    backgroundColor: COLORS.background,
  },

  scrollContent: {
    paddingHorizontal: SPACING.md,

    paddingTop: SPACING.sm,

    paddingBottom: 140,
  },

  emptyState: {
    backgroundColor: COLORS.surface,

    borderRadius: SPACING.xl,

    padding: 40,

    alignItems: "center",

    ...SHADOW,
  },

  emptyEmoji: {
    fontSize: 52,

    marginBottom: SPACING.md,
  },

  emptyTitle: {
    fontSize: 24,

    fontWeight: "700",

    color: COLORS.text,

    marginBottom: SPACING.sm,
  },

  emptyText: {
    fontSize: 16,

    lineHeight: 28,

    textAlign: "center",

    color: COLORS.textMuted,
  },

  card: {
    backgroundColor: COLORS.surface,

    borderRadius: SPACING.xl,

    overflow: "hidden",

    marginBottom: SPACING.lg,

    ...SHADOW,
  },

  image: {
    width: "100%",

    height: 190,
  },

  content: {
    padding: SPACING.lg,
  },

  title: {
    fontSize: 22,

    fontWeight: "700",

    color: COLORS.text,

    marginBottom: SPACING.sm,
  },

  deleteButton: {
    marginTop: SPACING.md,

    alignSelf: "flex-start",

    backgroundColor: COLORS.primarySoft,

    paddingHorizontal: SPACING.md,

    paddingVertical: 10,

    borderRadius: 999,
  },

  deleteText: {
    color: COLORS.primaryDark,

    fontWeight: "700",

    fontSize: 13,
  },

  meta: {
    fontSize: 15,

    color: COLORS.textMuted,
  },
});
