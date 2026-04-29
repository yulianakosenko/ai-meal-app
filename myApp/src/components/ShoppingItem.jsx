import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, RADII } from "../constants/theme";

export default function ShoppingItem({ checked, details, name, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.card, checked && styles.cardChecked]}
    >
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked ? <Text style={styles.checkmark}>✓</Text> : null}
      </View>
      <View style={styles.textWrap}>
        <Text style={[styles.name, checked && styles.nameChecked]}>{name}</Text>
        <Text style={[styles.details, checked && styles.detailsChecked]}>{details}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: RADII.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
    paddingHorizontal: 9,
    paddingTop: 9,
    paddingBottom: 8,
  },
  cardChecked: {
    backgroundColor: COLORS.successSoft,
    borderColor: COLORS.successBorder,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#d1d5dc",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: COLORS.success,
    borderColor: COLORS.success,
  },
  checkmark: {
    color: COLORS.surface,
    fontSize: 10,
    lineHeight: 10,
    fontWeight: "700",
  },
  textWrap: {
    flex: 1,
  },
  name: {
    color: COLORS.text,
    fontSize: 9,
    lineHeight: 14,
    fontWeight: "500",
  },
  nameChecked: {
    color: COLORS.textMuted,
    textDecorationLine: "line-through",
  },
  details: {
    color: COLORS.textMuted,
    fontSize: 8,
    lineHeight: 12,
  },
  detailsChecked: {
    color: COLORS.textSubtle,
  },
});
