import React from "react";
import { StyleSheet, View } from "react-native";

import { Logo, Post } from "components";
import { colours } from "styles";

const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.feedBody}>
        <Post description="A string" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.transparentBlue,
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
