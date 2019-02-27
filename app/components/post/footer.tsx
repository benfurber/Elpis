import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { colours, layout } from "styles";
import { Icon } from "components";

type Props = {
  avatarSource: NodeRequire;
};

const Footer = (props: Props) => {
  return (
    <View style={styles.footer}>
      <View style={styles.followingContainer}>
        <TouchableOpacity style={styles.followingButton}>
          <Text style={styles.followingButtonText}>Following</Text>
          <Icon name="user-check" />
        </TouchableOpacity>
      </View>
      <View style={styles.avatarContainer}>
        <Image source={props.avatarSource} style={styles.authorAvatar} />
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

export { Footer };
