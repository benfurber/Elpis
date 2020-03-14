import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Avatar, ButtonEditProfileLink, Title } from "components";
import { Author, NavigationType } from "interfaces";
import { labels } from "labels";
import { colours, layout } from "styles";

interface Props {
  navigation: NavigationType;
  user: null | Author;
}

class UserDetails extends Component<Props> {
  render() {
    const { navigation, user } = this.props;

    if (user) {
      const { avatarPath, id, name, totalReplies, totalTopics } = user;

      return (
        <View style={styles.container}>
          <View style={styles.firstRow}>
            <Avatar avatarPath={avatarPath} size="feature" />
            <Title style={styles.title} text={name} large />
            <ButtonEditProfileLink navigation={navigation} userId={id} />
          </View>
          <View style={styles.secondRow}>
            <View style={[styles.column, styles.bar]}>
              <Title text={labels.topics} />
              <Title
                text={(totalTopics && totalTopics.toString()) || "0"}
                large
              />
            </View>
            <View style={styles.column}>
              <Title text={labels.replies} />
              <Title
                text={(totalReplies && totalReplies.toString()) || "0"}
                large
              />
            </View>
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

export { UserDetails };
