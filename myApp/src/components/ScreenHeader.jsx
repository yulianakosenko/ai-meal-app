import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, LAYOUT, TYPOGRAPHY } from "../constants/theme";

export default function ScreenHeader({ title }) {
  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.primaryDark]}
      end={{ x: 1, y: 0.5 }}
      start={{ x: 0, y: 0.5 }}
      style={styles.container}
    >
      <Text style={styles.title}>{title}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height: LAYOUT.headerHeight,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  title: {
    color: COLORS.surface,
    fontSize: TYPOGRAPHY.caption,
    lineHeight: 16,
    fontWeight: "600",
  },
});
