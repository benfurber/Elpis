import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Avatar } from "components";
import { Author, NavigationType } from "interfaces";
import { colours, layout } from "styles";

interface Props {
  author: Author;
  navigation: NavigationType;
}

const Footer = (props: Props) => {
  const { author, navigation } = props;
  const { avatarPath, id, name } = author;

  return (
    <View>
      <View style={styles.followingContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.avatarContainer}>
        <Avatar
          avatarPath={avatarPath}
          communityId={id}
          containerStyles={styles.authorAvatarContainerStyles}
          navigation={navigation}
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
  },
  authorAvatarContainerStyles: {
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
