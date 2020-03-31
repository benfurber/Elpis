import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Avatar, Title } from "components";
import { Comment, NavigationType } from "interfaces";
import { colours, elements, layout } from "styles";
import { formatDate } from "utils";

interface Props {
  item: Comment;
  navigation: NavigationType;
}

class AuthorInfo extends Component<Props> {
  render() {
    const { item, navigation } = this.props;
    const { author, publishedAt, title } = item;

    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Avatar
            avatarPath={author.avatarPath}
            navigation={navigation}
            userId={author.id}
            size="large"
          />
        </View>
        <View style={styles.titleContainer}>
          {title && <Title text={title} />}
          <Text style={styles.metaDetails}>
            <Text style={styles.name}>{`${author.name} `}</Text>
            {formatDate(publishedAt, false)}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: "center",
    flexDirection: "row",
    width: 70,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  metaDetails: {
    marginBottom: layout.spacing,
    ...elements.textDate,
  },
  name: {
    color: colours.navyBlueDark,
    fontWeight: "bold",
  },
  text: {
    flex: 1,
    flexWrap: "nowrap",
    marginRight: layout.spacingXL,
  },
  titleContainer: {
    flex: 1,
  },
});

export { AuthorInfo };
