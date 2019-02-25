import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { Logo, Post } from "components";
import { colours } from "styles";

const FeedScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.feedBody}>
        <Post description="A string" />
        <Post description="A string" />
        <Post description="A string" />
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
