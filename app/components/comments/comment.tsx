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
    const { title, content } = item;

    return (
      <TouchableOpacity onPress={() => this.props.onPress(item.id)}>
        <View style={styles.commentContainer}>
          <View style={styles.avatarContainer}>
            <Badge left={35} number={item.totalReplies} />
            <View>
              <Avatar avatarPath={item.author.avatarPath} />
            </View>
          </View>
          <View style={styles.commentBodyContainer}>
            {title && <Title text={title} />}
            {content && (
              <Text style={styles.text}>{firstSentence(content)}</Text>
            )}
            <Text style={styles.commentDate}>{formatDate(item.createdAt)}</Text>
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
  commentContainer: {
    alignItems: "stretch",
    flex: 1,
    flexDirection: "row",
    margin: layout.spacing,
  },
  commentBodyContainer: {
    flex: 1,
    marginLeft: layout.spacing,
    marginBottom: layout.spacing,
  },
  commentDate: {
    marginBottom: layout.spacing,
    ...elements.textDate,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
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
