import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Avatar, RichTextDisplay, Title } from "components";
import { NavigationType, Reply as ReplyInterface } from "interfaces";
import { labels } from "labels";
import { colours, elements, layout } from "styles";
import { formatDate } from "utils";

interface Props {
  item: ReplyInterface;
  navigation: NavigationType;
}

class Reply extends Component<Props> {
  render() {
    const { item, navigation } = this.props;
    const { author, edited, publishedAt } = item;

    return (
      <View style={styles.commentContainer}>
        <View style={styles.details}>
          <Avatar avatarPath={author.avatarPath} size={"small"} />

          <View style={styles.authorDetails}>
            <Title text={author.name} small />
            <Text style={elements.textDate}>
              {formatDate(publishedAt)}
              {edited && ` (${labels.editedReply})`}
            </Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <RichTextDisplay item={item} navigation={navigation} />
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
