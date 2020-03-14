import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Avatar, Title } from "components";
import { Author } from "interfaces";
import { colours, layout } from "styles";

interface Props {
  user: null | Author;
}

class UserDetails extends Component<Props> {
  render() {
    const { user } = this.props;

    if (user) {
      const { avatarPath, name } = user;

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
  container: {
    width: "100%",
  },
  firstRow: {
    alignItems: "center",
    borderBottomColor: colours.pureWhite,
    borderBottomWidth: 3,
    marginBottom: layout.spacing,
    paddingBottom: layout.spacing,
    width: "100%",
  },
  title: {
    paddingVertical: layout.spacing,
  },
});

export { UserDetails };
