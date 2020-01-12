import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Avatar, Badge, Icon, Title } from "components";
import { Comment as CommentInterface } from "interfaces";
import { colours, elements, layout } from "styles";
import { firstSentence, formatDate } from "utils";

interface Props {
  item: CommentInterface;
  onPress: (number) => void;
}

class Comment extends Component<Props> {
  render() {
    const { item } = this.props;
    const { author, content, id, publishedAt, title, totalReplies } = item;

    return (
      <TouchableOpacity onPress={() => this.props.onPress(id)}>
        <View style={styles.commentContainer}>
          <View style={styles.avatarContainer}>
            <Badge left={35} number={totalReplies} />
            <View>
              <Avatar avatarPath={author.avatarPath} />
            </View>
          </View>
          <View style={styles.commentBodyContainer}>
            {title && <Title text={title} />}
            {content && (
              <Text style={styles.text}>{firstSentence(content)}</Text>
            )}
            <Text style={styles.commentDate}>{formatDate(publishedAt)}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon
              colour={colours.navyBlueDarkTransparentHigh}
              name="angle-double-right"
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  avatarContainer: {
    width: 60,
  },
  commentBodyContainer: {
    flex: 1,
    marginBottom: layout.spacing,
    marginLeft: layout.spacing,
  },
  commentContainer: {
    alignItems: "stretch",
    flex: 1,
    flexDirection: "row",
    margin: layout.spacing,
  },
  commentDate: {
    marginBottom: layout.spacing,
    ...elements.textDate,
  },
  iconContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: layout.spacing,
    marginRight: layout.spacingXS,
  },
  text: {
    flex: 1,
    flexWrap: "nowrap",
    marginBottom: layout.spacing,
  },
});

export { Comment };
