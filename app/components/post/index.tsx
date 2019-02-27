import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FlexImage from "react-native-flex-image";

import { colours, layout } from "styles";

import { Footer } from "./footer";
import { Tabs } from "./tabs";

interface Props {
  description: string;
}

const Post = (props: Props) => {
  const { description } = props;
  return (
    <View style={styles.container}>
      <Tabs />
      <View style={styles.body}>
        <FlexImage
          source={require("../../assets/images/image_post_1.jpg")}
          style={styles.image}
        />
        <Text style={styles.description}>{description}</Text>
      </View>
      <Footer />
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
