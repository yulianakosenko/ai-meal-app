import { StyleSheet, View } from "react-native";
import { COLORS } from "../constants/theme";

export default function TabIcon({ active, name }) {
  const stroke = active ? COLORS.primary : COLORS.textSubtle;

  if (name === "home") {
    return (
      <View style={styles.iconBox}>
        <View style={[styles.homeRoof, { borderBottomColor: stroke }]} />
        <View style={[styles.homeBody, { borderColor: stroke }]} />
      </View>
    );
  }

  if (name === "plan") {
    return (
      <View style={styles.iconBox}>
        <View style={[styles.calendar, { borderColor: stroke }]}>
          <View style={[styles.calendarRing, styles.calendarRingLeft, { backgroundColor: stroke }]} />
          <View style={[styles.calendarRing, styles.calendarRingRight, { backgroundColor: stroke }]} />
          <View style={[styles.calendarLine, { backgroundColor: stroke }]} />
        </View>
      </View>
    );
  }

  if (name === "list") {
    return (
      <View style={styles.iconBox}>
        <View style={[styles.cartBasket, { borderColor: stroke }]} />
        <View style={[styles.cartHandle, { borderColor: stroke }]} />
        <View style={[styles.cartWheel, styles.cartWheelLeft, { backgroundColor: stroke }]} />
        <View style={[styles.cartWheel, styles.cartWheelRight, { backgroundColor: stroke }]} />
      </View>
    );
  }

  return (
    <View style={styles.iconBox}>
      <View style={styles.barRow}>
        <View style={[styles.bar, { backgroundColor: stroke, height: 7 }]} />
        <View style={[styles.bar, { backgroundColor: stroke, height: 10 }]} />
        <View style={[styles.bar, { backgroundColor: stroke, height: 13 }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconBox: {
    width: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  homeRoof: {
    position: "absolute",
    top: 1,
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 6,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
  homeBody: {
    position: "absolute",
    top: 6,
    width: 10,
    height: 8,
    borderWidth: 1.4,
    borderTopWidth: 0,
    borderRadius: 2,
  },
  calendar: {
    width: 12,
    height: 12,
    borderWidth: 1.2,
    borderRadius: 2,
    marginTop: 1,
  },
  calendarRing: {
    position: "absolute",
    top: -2,
    width: 2,
    height: 3,
    borderRadius: 2,
  },
  calendarRingLeft: {
    left: 2,
  },
  calendarRingRight: {
    right: 2,
  },
  calendarLine: {
    position: "absolute",
    top: 3.2,
    left: 1.5,
    right: 1.5,
    height: 1.2,
  },
  cartBasket: {
    position: "absolute",
    bottom: 4,
    width: 10,
    height: 6,
    borderWidth: 1.2,
    borderTopWidth: 0,
    borderRadius: 1,
  },
  cartHandle: {
    position: "absolute",
    top: 3,
    left: 1,
    width: 6,
    height: 4,
    borderTopWidth: 1.2,
    borderLeftWidth: 1.2,
    transform: [{ skewX: "-20deg" }],
  },
  cartWheel: {
    position: "absolute",
    bottom: 1.5,
    width: 2.5,
    height: 2.5,
    borderRadius: 999,
  },
  cartWheelLeft: {
    left: 4,
  },
  cartWheelRight: {
    right: 3.2,
  },
  barRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 2,
    height: 14,
  },
  bar: {
    width: 2.5,
    borderRadius: 999,
  },
});
