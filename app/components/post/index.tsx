import React from "react";
import { StyleSheet, View } from "react-native";

import { Post as PostInterface } from "interfaces";

import { Body } from "./body";
import { Footer } from "./footer";
import { Tabs } from "./tabs";

interface Props {
  post: PostInterface;
}

const Post = (props: Props) => {
  const { author, date, description, imagePath } = props.post;

  return (
    <View style={styles.container}>
      <Tabs />
      <Body date={date} description={description} imagePath={imagePath} />
      <Footer avatarPath={author.avatarPath} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  }
});

export { Post };
