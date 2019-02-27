import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FlexImage from "react-native-flex-image";

import { colours, layout } from "styles";

import { Footer } from "./footer";
import { Tabs } from "./tabs";

interface Props {
  author: {
    avatarPath: NodeRequire;
  };
  post: {
    description: string;
    imagePath: NodeRequire;
  };
}

const Post = (props: Props) => {
  const { avatarPath } = props.author;
  const { description, imagePath } = props.post;

  return (
    <View style={styles.container}>
      <Tabs />
      <View style={styles.body}>
        <FlexImage source={imagePath} style={styles.image} />
        <Text style={styles.description}>{description}</Text>
      </View>
      <Footer avatarPath={avatarPath} />
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
  container: {
    marginBottom: 20
  },
  description: {
    marginVertical: 10
  },
  image: {
    borderRadius: layout.borderRadius,
    overflow: "hidden"
  }
});

export { Post };
