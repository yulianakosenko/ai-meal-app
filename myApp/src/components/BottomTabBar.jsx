import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../constants/theme";

import { tabs } from "../data/mockData";

export default function BottomTabBar({ activeTab, onTabPress }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <TouchableOpacity
              key={tab.id}
              style={[styles.tab, isActive && styles.activeTab]}
              onPress={() => onTabPress(tab.id)}
              activeOpacity={0.9}
            >
              <Ionicons
                name={
                  tab.id === "home"
                    ? "home-outline"
                    : tab.id === "meal"
                      ? "restaurant-outline"
                      : tab.id === "shopping"
                        ? "basket-outline"
                        : tab.id === "summary"
                          ? "stats-chart-outline"
                          : "time-outline"
                }
                size={24}
                color={isActive ? COLORS.primaryDark : COLORS.textMuted}
                style={styles.icon}
              />

              <Text style={[styles.label, isActive && styles.activeLabel]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",

    left: 18,
    right: 18,
    bottom: 22,
  },

  container: {
    height: 82,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    paddingHorizontal: 12,

    backgroundColor: "rgba(255,255,255,0.96)",

    borderRadius: 32,

    borderWidth: 1,

    borderColor: "rgba(255,255,255,0.7)",

    shadowColor: "#183B2B",

    shadowOffset: {
      width: 0,
      height: 14,
    },

    shadowOpacity: 0.12,

    shadowRadius: 28,

    elevation: 18,
  },

  tab: {
    flex: 1,

    height: 64,

    justifyContent: "center",

    alignItems: "center",

    borderRadius: 20,
  },

  activeTab: {
    backgroundColor: COLORS.primarySoft,
  },

  icon: {
    marginBottom: 4,
  },

  label: {
    fontSize: 13,

    color: COLORS.textMuted,

    fontWeight: "600",
  },

  activeLabel: {
    color: COLORS.primaryDark,

    fontWeight: "700",
  },
});
