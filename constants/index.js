import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",
  black: "#1E1F20",
  white: "#FFFFFF",
  lightGray: "#F5F7F9",
  lightGray2: "#FAFBFD",
  gray: "#BEC1D2",
  blue: "#42B0FF",
  darkGray: "#898C95",
  yellow: "#FFD573",
  lightBlue: "#95A9B8",
  darkGreen: "#008159",
  peach: "#FF615F",
  purple: "#8e44ad",
  red: "#FF0000",
  lightWhite: "#FAFAFC",
};

export const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

export const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

export const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export const icons = {
  menu: require("../assets/images/menu.png"),
  left: require("../assets/images/left.png"),
};

const appTheme = { COLORS, FONT, SIZES, SHADOWS };
export default appTheme;
