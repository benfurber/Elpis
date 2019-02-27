import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { Logo, Post } from "components";

const postAuthor = {
  avatarPath: require("../assets/images/empower_two_women_logo.png")
};
const post = {
  description: "A string",
  imagePath: require("../assets/images/image_post_1.jpg")
};

const FeedScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.feedBody}>
        <Post author={postAuthor} post={post} />
        <Post author={postAuthor} post={post} />
        <Post author={postAuthor} post={post} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  feedBody: { flex: 6 },
  logo: {
    flex: 1,
    alignItems: "stretch"
  }
});

export { FeedScreen };
