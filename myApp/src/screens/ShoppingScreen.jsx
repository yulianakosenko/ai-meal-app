import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import AppStatusBar from "../components/AppStatusBar";
import BottomTabBar from "../components/BottomTabBar";
import ScreenHeader from "../components/ScreenHeader";
import ShoppingItem from "../components/ShoppingItem";

import { COLORS } from "../constants/theme";
import { shoppingItems, tabs } from "../data/mockData";

export default function ShoppingScreen({ setScreen }) {
  const [items, setItems] = useState(shoppingItems);

  const toggleItem = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const collected = items.filter((i) => i.checked).length;

  return (
    <View style={styles.container}>
      <AppStatusBar />
      <ScreenHeader title="Shopping List" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {items.map((item) => (
          <ShoppingItem
            key={item.id}
            name={item.name}
            details={item.details}
            checked={item.checked}
            onPress={() => toggleItem(item.id)}
          />
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.counter}>
          {collected} of {items.length} items collected
        </Text>
      </View>

      <BottomTabBar activeTab="shopping" onTabPress={setScreen} tabs={tabs} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 360,
    width: "100%",
    alignSelf: "center",
    backgroundColor: COLORS.surface,
  },

  scrollContent: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 20,
    gap: 10,
    backgroundColor: COLORS.canvas,
  },

  footer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    backgroundColor: COLORS.surface,
    padding: 12,
  },

  counter: {
    textAlign: "center",
    fontSize: 13,
    color: COLORS.textMuted,
    fontWeight: "500",
  },
});
