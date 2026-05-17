import { StyleSheet, Text, View } from "react-native";

import { COLORS, RADII, SHADOW, SPACING, TYPOGRAPHY } from "../constants/theme";

export default function SectionCard({ title, children }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,

    borderRadius: RADII.lg,

    padding: SPACING.md,

    ...SHADOW,
  },

  title: {
    color: COLORS.primary,

    fontSize: TYPOGRAPHY.caption,

    fontWeight: "700",

    textTransform: "uppercase",

    letterSpacing: 1,

    marginBottom: SPACING.md,
  },

  content: {
    gap: SPACING.sm,
  },
});
