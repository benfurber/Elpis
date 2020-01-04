import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Avatar, Title } from "components";
import { Reply as ReplyInterface } from "interfaces";
import { colours, elements, layout } from "styles";
import { formatDate } from "utils";

interface Props {
  item: ReplyInterface;
}

class Reply extends Component<Props> {
  render() {
    const { item } = this.props;

    return (
      <View style={styles.commentContainer}>
        <View style={styles.details}>
          <Avatar avatarPath={item.author.avatarPath} size={"small"} />

          <View style={styles.authorDetails}>
            <Title text={item.author.name} small />
            <Text style={elements.textDate}>{formatDate(item.createdAt)}</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.body}>{item.content}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  authorDetails: {
    paddingLeft: layout.spacing,
  },
  body: {
    paddingVertical: layout.spacing,
  },
  commentContainer: {
    borderBottomColor: colours.pureWhite,
    borderBottomWidth: 3,
    margin: layout.spacing,
  },
  details: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: layout.spacing,
  },
  textContainer: {
    paddingBottom: layout.spacingL,
  },
});

export { Reply };
