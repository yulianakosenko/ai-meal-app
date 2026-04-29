import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/theme";

export default function ProcessingSpinner() {
  return (
    <View style={styles.container}>
      <View style={styles.ring}>
        <ActivityIndicator color="#bedbff" size="small" />
      </View>
      <Text style={styles.text}>AI is generating your optimized meal plan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  ring: {
    width: 49,
    height: 49,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#bedbff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  text: {
    color: COLORS.textMuted,
    fontSize: 9,
    lineHeight: 15,
    textAlign: "center",
  },
});
