import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FlexImage from "react-native-flex-image";

import { colours, layout } from "styles";
import { Icon } from "components";

interface Props {
  description: string;
}

const iconSize = 30;

const Post = (props: Props) => {
  const { description } = props;
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <View style={[styles.tabWithBackground, styles.tabSelected]}>
          <Icon name="palette" size={iconSize} style={styles.iconCentre} />
        </View>
        <View style={styles.tabWithBackground}>
          <TouchableOpacity>
            <Icon
              colour={colours.navyBlueDarkTransparentHigh}
              name="comments"
              size={iconSize}
              style={styles.iconCentre}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tabWithoutBackground}>
          <TouchableOpacity>
            <Icon
              name="ellipsis-h"
              size={iconSize - 5}
              style={styles.iconRight}
            />
          </TouchableOpacity>
        </View>
      </View>
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

const tabs = {
  borderTopLeftRadius: layout.borderRadius,
  borderTopRightRadius: layout.borderRadius,
  flex: 1,
  marginRight: 2,
  paddingHorizontal: 16,
  paddingVertical: 8
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
  iconCentre: {
    alignSelf: "center"
  },
  description: {
    marginVertical: 10
  },
  iconRight: {
    alignSelf: "flex-end"
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
  },
  tabs: {
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%"
  },
  tabSelected: {
    backgroundColor: colours.whiteTransparent
  },
  tabWithBackground: {
    ...tabs,
    backgroundColor: colours.whiteTransparentHigh
  },
  tabWithoutBackground: {
    ...tabs
  }
});

export { Post };
