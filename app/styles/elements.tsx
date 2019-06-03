import { StyleSheet } from "react-native";

import { colours } from "styles";

const standard = StyleSheet.create({
  basicInputField: {
    backgroundColor: colours.pureWhite,
    borderRadius: 5,
    flex: 1,
    height: 40,
    padding: 10,
    borderColor: colours.whiteTransparentHigh,
    borderWidth: 2,
  },
  image: {
    backgroundColor: colours.emeraldGreen,
    overflow: "hidden",
  },
});

const elements = StyleSheet.create({
  standardText: {
    fontFamily: "Lato",
  },
  button: {
    backgroundColor: colours.emeraldGreen,
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textDate: {
    color: colours.darkGrey,
    fontStyle: "italic",
  },
  imageRoundSmall: {
    ...standard.image,
    borderRadius: 23,
    height: 45,
    width: 45,
  },
  imageRound: {
    ...standard.image,
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  imageRoundLarge: {
    ...standard.image,
    borderRadius: 30,
    height: 60,
    width: 60,
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
