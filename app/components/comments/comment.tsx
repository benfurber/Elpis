import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Title } from "components";
import { Comment as CommentInterface } from "interfaces";
import { colours, elements, layout, typography } from "styles";
import { formatDate } from "utils";

interface Props {
  item: CommentInterface;
  onPress: (number) => void;
}

class Comment extends Component<Props> {
  renderBadge() {
    const { totalReplies } = this.props.item;
    if (totalReplies > 0) {
      return (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{totalReplies}</Text>
        </View>
      );
    }
  }

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity onPress={() => this.props.onPress(item.id)}>
        <View style={styles.commentContainer}>
          <View style={styles.avatarContainer}>
            {this.renderBadge()}
            <View>
              <Image
                source={item.author.avatarPath}
                style={elements.imageRound}
              />
            </View>
          </View>
          <View style={styles.commentBodyContainer}>
            <Title text={item.title} />
            <Text style={styles.commentDate}>
              {formatDate(item.dateCreated)}
            </Text>
            <Text style={styles.text}>{item.body}</Text>
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
  badge: {
    alignItems: "center",
    backgroundColor: colours.navyBlueDark,
    borderRadius: 11,
    flexDirection: "column",
    height: 22,
    justifyContent: "center",
    left: 35,
    position: "absolute",
    width: 22,
    zIndex: 1,
  },
  badgeText: {
    color: colours.pureWhite,
    fontSize: typography.fontSizeS,
  },
  text: {
    flex: 1,
    flexWrap: "nowrap",
  },
});

export { Comment };
