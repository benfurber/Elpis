import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FlexImage from "react-native-flex-image";

import { colours, layout } from "styles";

import { Footer } from "./footer";
import { Post as PostInterface } from "interfaces";
import { Tabs } from "./tabs";

interface Props {
  post: PostInterface;
}

const formatDate = (date: Date) => {
  const formatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  };
  return date.toLocaleString("en-GB", formatOptions);
};

const Post = (props: Props) => {
  const { author, date, description, imagePath } = props.post;

  return (
    <View style={styles.container}>
      <Tabs />
      <View style={styles.body}>
        <FlexImage source={imagePath} style={styles.image} />
        <Text style={styles.text}>{description}</Text>
        <Text style={[styles.date, styles.text]}>{formatDate(date)}</Text>
      </View>
      <Footer avatarPath={author.avatarPath} />
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

export { Post };
