import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

import { Logo, Post } from "components";

const post = {
  id: "98y723-23048-23480",
  author: {
    avatarPath: require("assets/images/empower_two_women_logo.png")
  },
  date: new Date("2018-02-17"),
  description:
    "Maju Coutinho estreia na bancada do Jornal Nacional \n\nMaria Júlia Coutinho estreou neste sábado, 16 de Fevereiro, como âncora do Jornal Nacional. O debute da primeira mulher negra na bancada do principal jornalístico da televisão brasileira rendeu elogios e muita comoção nas redes sociais.",
  imagePath: require("assets/images/image_post_1.jpg")
};
const posts = [post];

const FeedScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.feedBody}>
        <FlatList
          data={posts}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => <Post post={item} />}
        />
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
