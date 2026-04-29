import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, RADII } from "../constants/theme";

export default function GoalOption({ active, label, onPress }) {
  if (active) {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.touchable}>
        <LinearGradient
          colors={[COLORS.primary, COLORS.primaryDark]}
          end={{ x: 1, y: 0.5 }}
          start={{ x: 0, y: 0.5 }}
          style={styles.option}
        >
          <Text style={styles.activeText}>{label}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles.option, styles.idle]}>
      <Text style={styles.idleText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    width: "48.5%",
  },
  option: {
    width: "48.5%",
    minHeight: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: RADII.xs,
    paddingHorizontal: 6,
  },
  idle: {
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
  },
  activeText: {
    color: COLORS.surface,
    fontSize: 8,
    lineHeight: 12,
    fontWeight: "500",
    textAlign: "center",
  },
  idleText: {
    color: COLORS.textMuted,
    fontSize: 8,
    lineHeight: 12,
    fontWeight: "400",
    textAlign: "center",
  },
});
