import React from "react";
import { StyleSheet, View } from "react-native";

import { Avatar } from "components";
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
        <Avatar
          avatarPath={props.avatarPath}
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
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
  },
  followingContainer: {
    backgroundColor: colours.navyBlueDark,
    borderBottomLeftRadius: layout.borderRadius,
    borderBottomRightRadius: layout.borderRadius,
    flex: 1,
    padding: layout.spacingL,
  },
  footer: {
    backgroundColor: colours.whiteTransparent,
  },
});

export { Footer };
