import { StyleSheet } from "react-native";

import { layout } from "./layout";
import { typography } from "./typography";
import { colours } from "./colours";

const form = StyleSheet.create({
  label: {
    color: colours.mediumGrey,
    fontWeight: "bold",
    paddingTop: layout.spacingXL,
    paddingHorizontal: layout.spacingL,
  },
  fieldContainer: {
    width: "100%",
    flexDirection: "column",
  },
  title: {
    padding: layout.spacingL,
    fontFamily: "creteround-regular",
    fontSize: typography.fontSizeXL,
    flexWrap: "wrap",
  },
  text: {
    fontFamily: "creteround-regular",
    fontSize: typography.fontSizeL,
    padding: layout.spacingL,
    width: "100%",
  },
});

export { form };
