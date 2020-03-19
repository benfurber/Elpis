import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Avatar, Title } from "components";
import { Community, NavigationType } from "interfaces";
import { colours, layout } from "styles";

interface Props {
  community: null | Community;
  navigation: NavigationType;
}

class CommunityDetails extends Component<Props> {
  render() {
    const { community } = this.props;

    if (community) {
      const { avatarPath, name } = community;

      return (
        <View style={styles.container}>
          <View style={styles.firstRow}>
            <Avatar avatarPath={avatarPath} size="feature" />
            <Title style={styles.title} text={name} large />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  bar: {
    borderRightColor: colours.pureWhite,
    borderRightWidth: 3,
  },
  column: {
    alignItems: "center",
    flex: 1,
    margin: layout.spacing,
    padding: layout.spacing,
  },
  container: {
    width: "100%",
  },
  firstRow: {
    alignItems: "center",
    borderBottomColor: colours.pureWhite,
    borderBottomWidth: 3,
    marginBottom: layout.spacing,
    paddingBottom: layout.spacingL,
    width: "100%",
  },
  secondRow: {
    flexDirection: "row",
  },
  title: {
    paddingVertical: layout.spacing,
  },
});

export { CommunityDetails };
