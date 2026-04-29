import { ScrollView, StyleSheet, View } from "react-native";

import AppStatusBar from "../components/AppStatusBar";
import BottomTabBar from "../components/BottomTabBar";
import MetricCard from "../components/MetricCard";
import PrimaryButton from "../components/PrimaryButton";
import ScreenHeader from "../components/ScreenHeader";
import SummaryInsightCard from "../components/SummaryInsightCard";

import { COLORS } from "../constants/theme";
import { summaryCards, tabs } from "../data/mockData";

export default function SummaryScreen({ setScreen }) {
  return (
    <View style={styles.container}>
      <AppStatusBar />
      <ScreenHeader title="Summary" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {summaryCards.map((card) => (
          <MetricCard
            key={card.id}
            label={card.label}
            value={card.value}
            positive={card.positive}
          />
        ))}

        <SummaryInsightCard text="No unnecessary purchases — great job!" />
      </ScrollView>

      <View style={styles.buttonSection}>
        <PrimaryButton
          title="Start New Plan"
          onPress={() => setScreen("home")}
        />
      </View>

      <BottomTabBar activeTab="summary" onTabPress={setScreen} tabs={tabs} />
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

  buttonSection: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    backgroundColor: COLORS.surface,
    padding: 12,
  },
});
