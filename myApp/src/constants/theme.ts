import { Platform } from "react-native";

export const COLORS = {
  background: "#eef2f7",
  surface: "#ffffff",
  canvas: "#f9fafb",
  card: "#ffffff",
  primary: "#2b7fff",
  primaryDark: "#155dfc",
  primarySoft: "#eff6ff",
  success: "#00c950",
  successSoft: "#f0fdf4",
  successBorder: "#b9f8cf",
  successText: "#008236",
  text: "#1e2939",
  textMuted: "#6a7282",
  textSubtle: "#99a1af",
  textStrong: "#364153",
  border: "#e5e7eb",
  infoBorder: "#dbeafe",
  infoSoft: "#eff6ff",
  shadow: "#111827",
};

export const SPACING = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
};

export const RADII = {
  xs: 4,
  sm: 10,
  md: 16,
  lg: 24,
  pill: 999,
};

export const TYPOGRAPHY = {
  title: 24,
  subtitle: 18,
  body: 15,
  small: 13,
  caption: 12,
  tiny: 10,
};

export const SHADOW = Platform.select({
  ios: {
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  android: {
    elevation: 4,
  },
  default: {
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
});

export const LAYOUT = {
  maxContentWidth: 420,
  statusHeight: 16,
  headerHeight: 32,
  buttonHeight: 31,
  tabBarHeight: 54,
};
