import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colours, layout } from "styles";

const Comments = () => {
  return (
    <View style={styles.body}>
      <Text>COMMENTS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: colours.whiteTransparent,
    borderTopRightRadius: layout.borderRadius,
    padding: layout.padding,
    width: "100%"
  },
  date: {
    fontStyle: "italic"
  },
  text: {
    marginVertical: 10
  },
  image: {
    borderRadius: layout.borderRadius,
    overflow: "hidden"
  }
});

export { Comments };
