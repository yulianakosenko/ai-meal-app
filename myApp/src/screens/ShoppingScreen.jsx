import { ScrollView, StyleSheet, Text, View } from "react-native";

import AppStatusBar from "../components/AppStatusBar";
import BottomTabBar from "../components/BottomTabBar";
import PrimaryButton from "../components/PrimaryButton";
import ScreenHeader from "../components/ScreenHeader";

import { COLORS, SHADOW, SPACING } from "../constants/theme";

import { tabs } from "../data/mockData";

export default function ShoppingScreen({ setScreen }) {
  const products = [
    {
      id: 1,
      name: "Chicken Breast",
      amount: "800 g",
      price: "€8.50",
    },

    {
      id: 2,
      name: "Avocado",
      amount: "4 pcs",
      price: "€5.20",
    },

    {
      id: 3,
      name: "Greek Yogurt",
      amount: "1 kg",
      price: "€4.90",
    },

    {
      id: 4,
      name: "Brown Rice",
      amount: "2 kg",
      price: "€6.10",
    },
  ];

  return (
    <View style={styles.container}>
      <AppStatusBar />

      <ScreenHeader title="Shopping List" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Weekly Budget</Text>

          <Text style={styles.summaryPrice}>€24.70</Text>

          <Text style={styles.summarySubtitle}>
            Healthy groceries for your personalized meal plan
          </Text>
        </View>

        {products.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.left}>
              <View style={styles.checkbox} />

              <View>
                <Text style={styles.name}>{item.name}</Text>

                <Text style={styles.amount}>{item.amount}</Text>
              </View>
            </View>

            <Text style={styles.price}>{item.price}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.buttonSection}>
        <PrimaryButton title="Continue" onPress={() => setScreen("summary")} />
      </View>

      <BottomTabBar activeTab="shopping" onTabPress={setScreen} tabs={tabs} />
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

  summaryCard: {
    backgroundColor: COLORS.primarySoft,

    borderRadius: SPACING.xl,

    padding: SPACING.xl,

    marginBottom: SPACING.lg,
  },

  summaryTitle: {
    fontSize: 16,

    color: COLORS.primaryDark,

    marginBottom: SPACING.sm,
  },

  summaryPrice: {
    fontSize: 44,

    fontWeight: "700",

    color: COLORS.primaryDark,

    marginBottom: SPACING.sm,
  },

  summarySubtitle: {
    fontSize: 15,

    lineHeight: 24,

    color: COLORS.textMuted,
  },

  card: {
    backgroundColor: COLORS.surface,

    borderRadius: SPACING.xl,

    padding: SPACING.lg,

    marginBottom: SPACING.md,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    ...SHADOW,
  },

  left: {
    flexDirection: "row",

    alignItems: "center",

    gap: SPACING.md,
  },

  checkbox: {
    width: 22,
    height: 22,

    borderRadius: 999,

    borderWidth: 2,

    borderColor: COLORS.primary,
  },

  name: {
    fontSize: 17,

    fontWeight: "600",

    color: COLORS.text,

    marginBottom: 4,
  },

  amount: {
    fontSize: 14,

    color: COLORS.textMuted,
  },

  price: {
    fontSize: 16,

    fontWeight: "700",

    color: COLORS.primaryDark,
  },

  buttonSection: {
    paddingHorizontal: SPACING.md,

    paddingTop: SPACING.sm,

    paddingBottom: SPACING.lg,

    backgroundColor: COLORS.background,
  },
});
