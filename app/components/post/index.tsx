import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FlexImage from "react-native-flex-image";

import { colours, layout } from "styles";
import { Icon } from "components";

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
      <View style={styles.footer}>
        <View style={styles.followingContainer}>
          <TouchableOpacity style={styles.followingButton}>
            <Text style={styles.followingButtonText}>Following</Text>
            <Icon name="user-check" />
          </TouchableOpacity>
        </View>
        <View style={styles.avatarContainer}>
          <Image
            source={require("../../assets/images/empower_two_women_logo.png")}
            style={styles.authorAvatar}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authorAvatar: {
    backgroundColor: colours.navyBlueDark,
    borderColor: colours.navyBlueDark,
    borderRadius: 30,
    borderWidth: 5,
    height: 60,
    overflow: "hidden",
    position: "absolute",
    top: -60,
    width: 60
  },
  avatarContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column"
  },
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
  },
  followingButton: {
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: colours.whiteTransparent,
    borderRadius: 99,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  followingContainer: {
    backgroundColor: colours.navyBlueDark,
    borderBottomLeftRadius: layout.borderRadius,
    borderBottomRightRadius: layout.borderRadius,
    flex: 1,
    padding: layout.padding
  },
  followingButtonText: {
    paddingRight: 10
  },
  footer: {
    backgroundColor: colours.whiteTransparent
  }
});

export { Post };
