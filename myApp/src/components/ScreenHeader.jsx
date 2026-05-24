import { Platform, View, Text, StyleSheet } from "react-native";

import { COLORS } from "../constants/theme";

export default function ScreenHeader({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // iOS and Android spacing adjustments
    paddingTop: Platform.select({
      ios: 20,
      android: 10,
    }),

    paddingHorizontal: 24,

    paddingBottom: 18,
  },

  subtitle: {
    fontSize: 15,

    color: COLORS.textMuted,

    marginBottom: 8,

    fontWeight: "500",
  },

  title: {
    fontSize: 34,

    lineHeight: 38,

    fontWeight: "800",

    letterSpacing: -1.5,

    color: "#07162E",
  },
});
