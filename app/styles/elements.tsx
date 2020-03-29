import { StyleSheet } from "react-native";

import { typography } from "./typography";
import { colours } from "styles";

const standard = StyleSheet.create({
  basicInputField: {
    backgroundColor: colours.pureWhite,
    borderColor: colours.whiteTransparentHigh,
    borderRadius: 5,
    borderWidth: 2,
    color: colours.darkGrey,
    flex: 1,
    height: 40,
    padding: 10,
  },
  image: {
    backgroundColor: colours.emeraldGreen,
    overflow: "hidden",
  },
});

const elements = StyleSheet.create({
  button: {
    backgroundColor: colours.emeraldGreen,
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  imageRound: {
    ...standard.image,
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  imageRoundFeature: {
    ...standard.image,
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  imageRoundLarge: {
    ...standard.image,
    borderRadius: 30,
    height: 60,
    width: 60,
  },
  imageRoundSmall: {
    ...standard.image,
    borderRadius: 23,
    height: 45,
    width: 45,
  },
  imageRoundXL: {
    ...standard.image,
    borderRadius: 35,
    height: 70,
    width: 70,
  },
  standardText: {
    fontFamily: "lato-regular",
    fontSize: typography.fontSize,
  },
  textDate: {
    color: colours.darkGrey,
    fontStyle: "italic",
  },
  textInputField: standard.basicInputField,
  textInputFieldError: {
    ...standard.basicInputField,
    borderColor: colours.red,
  },
  textInputFieldLoading: {
    ...standard.basicInputField,
    backgroundColor: colours.lightGrey,
  },
});

export { elements };
