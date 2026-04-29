import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, LAYOUT, RADII, TYPOGRAPHY } from "../constants/theme";
import TabIcon from "./TabIcon";

export default function BottomTabBar({ activeTab, tabs, onTabPress }) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const active = activeTab === tab.id;

        return (
          <TouchableOpacity
            key={tab.id}
            activeOpacity={0.85}
            onPress={() => onTabPress(tab.id)}
            style={[styles.tab, active && styles.tabActive]}
          >
            <TabIcon active={active} name={tab.icon} />
            <Text style={[styles.label, active && styles.labelActive]}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: LAYOUT.tabBarHeight,
    paddingHorizontal: 8,
    paddingTop: 7,
    paddingBottom: 6,
    backgroundColor: COLORS.surface,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    borderRadius: RADII.sm,
    paddingVertical: 4,
  },
  tabActive: {
    backgroundColor: COLORS.primarySoft,
  },
  label: {
    color: COLORS.textMuted,
    fontSize: TYPOGRAPHY.tiny,
    lineHeight: 15,
  },
  labelActive: {
    color: COLORS.primary,
    fontWeight: "600",
  },
});
