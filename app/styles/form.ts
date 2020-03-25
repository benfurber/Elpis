import { StyleSheet } from "react-native";

import { layout } from "./layout";
import { typography } from "./typography";
import { colours } from "./colours";

const form = StyleSheet.create({
  fieldContainer: {
    flexDirection: "column",
    width: "100%",
  },
  label: {
    color: colours.darkGrey,
    fontWeight: "bold",
    paddingHorizontal: layout.spacingL,
    paddingTop: layout.spacingL,
  },
  text: {
    fontFamily: "Dosis-ExtraLight",
    fontSize: typography.fontSizeL,
    padding: layout.spacingL,
    width: "100%",
  },
  title: {
    flexWrap: "wrap",
    fontFamily: "Dosis-ExtraLight",
    fontSize: typography.fontSizeL,
    padding: layout.spacingL,
  },
});

export { form };
