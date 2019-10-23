import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Avatar, LinkPreview, Title } from "components";
import { Reply as ReplyInterface } from "interfaces";
import { colours, elements, layout } from "styles";
import { formatDate } from "utils";

interface Props {
  item: ReplyInterface;
}

class Reply extends Component<Props> {
  render() {
    const { author, content, link, publishedAt } = this.props.item;

    return (
      <View style={styles.commentContainer}>
        <View style={styles.details}>
          <Avatar avatarPath={author.avatarPath} size={"small"} />

          <View style={styles.authorDetails}>
            <Title text={author.name} small />
            <Text style={elements.textDate}>{formatDate(publishedAt)}</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          {link && <LinkPreview url={link} />}
          <Text style={styles.body}>{content}</Text>
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
