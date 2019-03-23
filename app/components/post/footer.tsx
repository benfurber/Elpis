import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Author } from "interfaces";
import { colours, layout } from "styles";

interface Props {
  avatarPath: Author["avatarPath"];
}

const Footer = (props: Props) => {
  return (
    <View style={styles.footer}>
      <View style={styles.followingContainer} />
      <View style={styles.avatarContainer}>
        <Image source={props.avatarPath} style={styles.authorAvatar} />
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
  followingContainer: {
    backgroundColor: colours.navyBlueDark,
    borderBottomLeftRadius: layout.borderRadius,
    borderBottomRightRadius: layout.borderRadius,
    flex: 1,
    padding: layout.spacing * 2
  },
  footer: {
    backgroundColor: colours.whiteTransparent
  }
});

export { Footer };
