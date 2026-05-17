import { useEffect, useRef } from "react";

import { View, Text, StyleSheet, Animated } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import AppStatusBar from "../components/AppStatusBar";
import BottomTabBar from "../components/BottomTabBar";

import { COLORS, SPACING } from "../constants/theme";

import { tabs } from "../data/mockData";

import { generateMealPlanAI } from "../utils/realAI";
import { saveMealPlan } from "../utils/storage";

export default function ProcessingScreen({ setScreen, data, setData }) {
  const dot1 = useRef(new Animated.Value(0.4)).current;

  const dot2 = useRef(new Animated.Value(0.4)).current;

  const dot3 = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    const animateDot = (animatedValue, delay) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 500,
            delay,
            useNativeDriver: true,
          }),

          Animated.timing(animatedValue, {
            toValue: 0.4,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };

    animateDot(dot1, 0);
    animateDot(dot2, 200);
    animateDot(dot3, 400);

    const runAI = async () => {
      try {
        const plan = await generateMealPlanAI(data);

        setData(plan);
        await saveMealPlan({
          ...plan,

          calories: data?.calories || "1800",

          days: data?.days || "7",
        });
        setTimeout(() => {
          setScreen("meal");
        }, 2200);
      } catch (error) {
        console.log(error);
      }
    };

    runAI();
  }, []);

  return (
    <LinearGradient colors={["#F8FAF7", "#EEF7F1"]} style={styles.container}>
      <AppStatusBar />

      <View style={styles.content}>
        <View style={styles.circle}>
          <Text style={styles.emoji}>🥗</Text>
        </View>

        <Text style={styles.title}>AI is creating your meal plan</Text>

        <Text style={styles.subtitle}>
          Analyzing nutrition goals, calories and healthy meals...
        </Text>

        <View style={styles.loaderRow}>
          <Animated.View
            style={[
              styles.loaderDot,
              {
                opacity: dot1,
                transform: [{ scale: dot1 }],
              },
            ]}
          />

          <Animated.View
            style={[
              styles.loaderDot,
              {
                opacity: dot2,
                transform: [{ scale: dot2 }],
              },
            ]}
          />

          <Animated.View
            style={[
              styles.loaderDot,
              {
                opacity: dot3,
                transform: [{ scale: dot3 }],
              },
            ]}
          />
        </View>
      </View>

      <BottomTabBar activeTab="meal" onTabPress={setScreen} tabs={tabs} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: SPACING.xl,
  },

  circle: {
    width: 130,
    height: 130,

    borderRadius: 999,

    backgroundColor: COLORS.primarySoft,

    justifyContent: "center",
    alignItems: "center",

    marginBottom: SPACING.xl,
  },

  emoji: {
    fontSize: 56,
  },

  title: {
    fontSize: 30,

    fontWeight: "700",

    color: COLORS.text,

    textAlign: "center",

    marginBottom: SPACING.md,
  },

  subtitle: {
    fontSize: 17,

    lineHeight: 28,

    color: COLORS.textMuted,

    textAlign: "center",

    marginBottom: SPACING.xl,
  },

  loaderRow: {
    flexDirection: "row",

    alignItems: "center",

    gap: SPACING.sm,
  },

  loaderDot: {
    width: 12,
    height: 12,

    borderRadius: 999,

    backgroundColor: COLORS.primary,
  },
});
