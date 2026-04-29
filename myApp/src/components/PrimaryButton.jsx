import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, LAYOUT, RADII, TYPOGRAPHY } from "../constants/theme";

export default function PrimaryButton({ title, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.touchable}>
      <LinearGradient
        colors={[COLORS.primary, COLORS.primaryDark]}
        end={{ x: 1, y: 0.5 }}
        start={{ x: 0, y: 0.5 }}
        style={styles.button}
      >
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    width: "100%",
  },
  button: {
    minHeight: LAYOUT.buttonHeight,
    borderRadius: RADII.pill,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: COLORS.surface,
    fontSize: TYPOGRAPHY.tiny,
    lineHeight: 15,
    fontWeight: "600",
  },
});
