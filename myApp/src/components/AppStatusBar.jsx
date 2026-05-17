import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, LAYOUT, TYPOGRAPHY } from "../constants/theme";

export default function AppStatusBar() {
  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.primaryDark]}
      end={{ x: 1, y: 0.5 }}
      start={{ x: 0, y: 0.5 }}
      style={styles.container}
    >
      <Text style={styles.time}>12:34</Text>
      <View style={styles.signalGroup}>
        <View style={styles.signalDot} />
        <View style={styles.signalDot} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height: LAYOUT.statusHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  time: {
    color: COLORS.surface,
    fontSize: 8,
    lineHeight: TYPOGRAPHY.caption,
    fontWeight: "500",
  },
  signalGroup: {
    flexDirection: "row",
    gap: 2,
  },
  signalDot: {
    width: 6,
    height: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.8)",
  },

});
