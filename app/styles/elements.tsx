import { StyleSheet } from "react-native";

import { colours } from "styles";

const standard = StyleSheet.create({
  image: {
    backgroundColor: colours.emeraldGreen,
    overflow: "hidden",
  },
});

const elements = StyleSheet.create({
  standardText: {
    fontFamily: "Lato",
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
});

export { elements };
