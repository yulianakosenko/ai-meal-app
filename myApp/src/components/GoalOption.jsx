import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import {
  COLORS,
} from "../constants/theme";

export default function GoalOption({
  label,
  active,
  onPress,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        styles.container,

        active &&
          styles.activeContainer,
      ]}
    >

      <Text
        style={[
          styles.label,

          active &&
            styles.activeLabel,
        ]}
      >
        {label}
      </Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 116,

    height: 62,

    paddingHorizontal: 24,

    borderRadius: 24,

    justifyContent: "center",

    alignItems: "center",

    backgroundColor:
      COLORS.surface,

    borderWidth: 1,

    borderColor:
      "rgba(0,0,0,0.05)",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 6,
    },

    shadowOpacity: 0.03,

    shadowRadius: 14,

    elevation: 3,
  },

  activeContainer: {
    backgroundColor:
      "#E7F5EC",

    borderColor:
      "#BEE7CC",
  },

  label: {
    fontSize: 17,

    fontWeight: "600",

    color:
      COLORS.textMuted,
  },

  activeLabel: {
    color:
      COLORS.primaryDark,

    fontWeight: "700",
  },
});