import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, RADII } from "../constants/theme";

export default function SummaryInsightCard({ text }) {
  return (
    <View style={styles.card}>
      <LinearGradient
        colors={[COLORS.primary, COLORS.primaryDark]}
        end={{ x: 1, y: 0.5 }}
        start={{ x: 0, y: 0.5 }}
        style={styles.badge}
      >
        <Text style={styles.badgeIcon}>✓</Text>
      </LinearGradient>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: RADII.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
    paddingTop: 8,
    paddingBottom: 9,
    alignItems: "center",
  },
  badge: {
    width: 32,
    height: 32,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
  badgeIcon: {
    color: COLORS.surface,
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "600",
  },
  text: {
    color: COLORS.textStrong,
    fontSize: 9,
    lineHeight: 14,
    fontWeight: "500",
    textAlign: "center",
  },
});
