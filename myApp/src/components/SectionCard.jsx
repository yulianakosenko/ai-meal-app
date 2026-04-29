import { StyleSheet, Text, View } from "react-native";
import { COLORS, RADII, SHADOW } from "../constants/theme";

export default function SectionCard({ children, title }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: RADII.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
    paddingTop: 9,
    paddingHorizontal: 9,
    paddingBottom: 8,
    ...SHADOW,
  },
  title: {
    color: COLORS.primaryDark,
    fontSize: 8,
    lineHeight: 12,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  content: {
    marginTop: 6,
    gap: 6,
  },
});
