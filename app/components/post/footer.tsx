import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Avatar } from "components";
import { Author } from "interfaces";
import { colours, layout } from "styles";

interface Props {
  author: Author;
}

const Footer = (props: Props) => {
  const { avatarPath, name } = props.author;

  return (
    <View>
      <View style={styles.followingContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.avatarContainer}>
        <Avatar
          avatarPath={avatarPath}
          size={"large"}
          styles={styles.authorAvatar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authorAvatar: {
    borderColor: colours.navyBlueDark,
    borderWidth: 4,
    position: "absolute",
    top: -50,
  },
  avatarContainer: {
    alignItems: "flex-end",
    flex: 1,
    flexDirection: "column",
    marginRight: layout.spacing,
  },
  followingContainer: {
    backgroundColor: colours.navyBlueDark,
    borderBottomLeftRadius: layout.borderRadius,
    borderBottomRightRadius: layout.borderRadius,
    flex: 1,
  },
  text: {
    color: colours.pureWhite,
    fontWeight: "bold",
    padding: layout.spacing,
  },
});

export { Footer };
