import { StyleSheet, Text, View } from "react-native";
import { COLORS, RADII, SHADOW } from "../constants/theme";

export default function MetricCard({ label, positive, value }) {
  return (
    <View style={[styles.card, positive && styles.positiveCard]}>
      <Text style={[styles.label, positive && styles.positiveLabel]}>{label}</Text>
      <Text style={[styles.value, positive && styles.positiveValue]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: RADII.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
    paddingHorizontal: 13,
    paddingTop: 13,
    paddingBottom: 9,
    alignItems: "center",
    gap: 4,
    ...SHADOW,
  },
  positiveCard: {
    backgroundColor: COLORS.successSoft,
    borderColor: COLORS.success,
  },
  label: {
    color: COLORS.textMuted,
    fontSize: 8,
    lineHeight: 12,
    fontWeight: "500",
  },
  positiveLabel: {
    color: COLORS.successText,
    fontWeight: "600",
  },
  value: {
    color: COLORS.text,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "700",
  },
  positiveValue: {
    color: COLORS.successText,
  },
});
