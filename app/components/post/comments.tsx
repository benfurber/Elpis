import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Post } from "interfaces";
import { colours, layout } from "styles";
import { firstSentence } from "utils";

interface Props {
  description: Post["description"];
}

const Comments = (props: Props) => {
  const shortDescription = () => {
    if (props.description) {
      return firstSentence(props.description);
    }
  };

  return (
    <View style={styles.body}>
      <Text>{shortDescription()}</Text>
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
