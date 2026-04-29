import { StyleSheet, Text, View } from "react-native";
import { COLORS, RADII } from "../constants/theme";

export default function FieldBox({ compact = false, label, subtle = false, value }) {
  return (
    <View style={[styles.wrapper, compact && styles.compactWrap]}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.box, subtle && styles.subtleBox]}>
        <Text style={[styles.value, subtle && styles.subtleValue]}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  compactWrap: {
    flex: 1,
  },
  label: {
    color: COLORS.textMuted,
    fontSize: 8,
    lineHeight: 12,
    fontWeight: "500",
  },
  box: {
    minHeight: 38,
    justifyContent: "center",
    borderRadius: RADII.xs,
    borderWidth: 1,
    borderColor: COLORS.infoBorder,
    backgroundColor: COLORS.infoSoft,
    paddingHorizontal: 6,
  },
  subtleBox: {
    backgroundColor: COLORS.infoSoft,
  },
  value: {
    color: "#0a0a0a",
    fontSize: 10,
    lineHeight: 15,
    fontWeight: "500",
  },
  subtleValue: {
    fontWeight: "400",
    fontSize: 9,
    lineHeight: 14,
  },
});
