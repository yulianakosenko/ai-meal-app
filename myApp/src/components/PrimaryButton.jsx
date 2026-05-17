import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { COLORS } from "../constants/theme";

export default function PrimaryButton({ title, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.wrapper}
    >
      <LinearGradient
        colors={["#45B36B", "#2F8F57"]}
        start={{
          x: 0,
          y: 0,
        }}
        end={{
          x: 1,
          y: 1,
        }}
        style={styles.button}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    shadowColor: "#2F8F57",

    shadowOffset: {
      width: 0,
      height: 14,
    },

    shadowOpacity: 0.22,

    shadowRadius: 24,

    elevation: 10,
  },

  button: {
    height: 64,

    borderRadius: 30,

    justifyContent: "center",

    alignItems: "center",
  },

  text: {
    color: COLORS.white,

    fontSize: 20,

    fontWeight: "700",

    letterSpacing: -0.5,
  },
});
