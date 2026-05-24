import React from "react";

import { View, TextInput, StyleSheet } from "react-native";

import { Search } from "lucide-react-native";

import { COLORS } from "../constants/theme";

export default function SearchBar({ value, onChangeText }) {
  return (
    <View style={styles.container} focusable={false}>
      <Search size={18} color={COLORS.textMuted} />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search healthy meals"
        placeholderTextColor={COLORS.textMuted}
        selectionColor={COLORS.primary}
        cursorColor={COLORS.primary}
        underlineColorAndroid="transparent"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    alignItems: "center",

    backgroundColor: COLORS.surface,

    borderRadius: 18,

    paddingHorizontal: 18,

    height: 56,

    marginBottom: 18,

    borderWidth: 0,

    outlineWidth: 0,

    outlineStyle: "none",
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    color: COLORS.text,
    outlineStyle: "none",
    outlineWidth: 0,
    outlineColor: "transparent",
    borderWidth: 0,
     
  },
});
