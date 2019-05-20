import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

import { Logo, Post } from "components";
import { NavigationType } from "interfaces";
import { colours } from "styles";

interface Props {
  navigation: NavigationType;
}

const reply1 = {
  author: {
    avatarPath: require("assets/images/profile-pic-annon.png"),
    name: "Kelli S",
  },
  body:
    "Meu pai também fez o mesmo. Logo depois que minha mãe pediu o divórcio porque sofria violência dentro de casa, ele pegou as malas, se mudou e sumiu no mundo. Nem faço mais questão de saber pra onde ele foi.",
  dateCreated: new Date("2019-01-02"),
  id: "21098",
};

const reply2 = {
  author: {
    avatarPath: require("assets/images/profile-pic-annon.png"),
    name: "Kelli S",
  },
  body: "Nem faço mais questão de saber pra onde ele foi.",
  dateCreated: new Date("2019-01-03"),
  id: "21099",
};

const comment = {
  author: {
    avatarPath: require("assets/images/profile-pic-may.jpg"),
    name: "Maynara F",
  },
  body:
    "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
  dateCreated: new Date("2019-01-01"),
  id: "21097",
  replies: [reply1, reply2],
  title: "Meu pai fez o que ela mandou…",
  totalReplies: 2,
};

const comment2 = {
  author: {
    avatarPath: require("assets/images/profile-pic-may.jpg"),
    name: "Maynara II",
  },
  body: "Nunca mais voltou, pena que a violência só piorou.",
  dateCreated: new Date("2019-02-01"),
  id: "21100",
  replies: [],
  title: "",
  totalReplies: 0,
};

const posts = [
  {
    id: "98y723-23048-23480",
    author: {
      avatarPath: require("assets/images/empower_two_women_logo.png"),
      name: "Empodere Duas Mulheres",
    },
    comments: [comment, comment2],
    date: new Date("2018-02-17"),
    description:
      "Maju Coutinho estreia na bancada do Jornal Nacional \n\nMaria Júlia Coutinho estreou neste sábado, 16 de Fevereiro, como âncora do Jornal Nacional. O debute da primeira mulher negra na bancada do principal jornalístico da televisão brasileira rendeu elogios e muita comoção nas redes sociais.",
    imagePath: require("assets/images/image_post_1.jpg"),
  },
  {
    id: "324869-saf80as-ssae",
    author: {
      avatarPath: require("assets/images/empower_two_women_logo.png"),
      name: "Empodere Duas Mulheres",
    },
    comments: [],
    date: new Date("2018-02-11"),
    description: null,
    imagePath: require("assets/images/image_post_2.jpg"),
  },
];

const FeedScreen = (props: Props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.feedBody}>
        <FlatList
          data={posts}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Post navigation={props.navigation} post={item} />
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.transparentBlue,
    flex: 1,
    flexDirection: "column",
  },
  feedBody: { flex: 6 },
  logo: {
    flex: 1,
    alignItems: "stretch",
  },
});

export { FeedScreen };
