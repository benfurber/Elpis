import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { Comment as CommentInterface } from "interfaces";
import { colours, layout, typography } from "styles";
import { formatDate } from "utils";

interface Props {
  item: CommentInterface;
}

const Comment = (props: Props) => {
  const { item } = props;

  return (
    <View style={styles.commentContainer}>
      <View style={styles.avatarContainer}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.totalReplies}</Text>
        </View>
        <View>
          <Image source={item.author.avatarPath} style={styles.image} />
        </View>
      </View>
      <View style={styles.commentBodyContainer}>
        <Text style={styles.commentTitle}>{item.title}</Text>
        <Text style={styles.commentDate}>{formatDate(item.dateCreated)}</Text>
        <Text>{item.body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    width: 60
  },
  commentContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: layout.spacing
  },
  commentBodyContainer: {
    marginLeft: layout.spacing
  },
  commentDate: {
    color: colours.darkGrey,
    fontStyle: "italic",
    marginBottom: layout.spacing
  },
  commentTitle: {
    fontSize: typography.fontSizeL,
    marginBottom: layout.spacingS
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
    zIndex: 1
  },
  badgeText: {
    color: colours.pureWhite,
    fontSize: typography.fontSizeS
  },
  image: {
    backgroundColor: colours.emeraldGreen,
    borderRadius: 25,
    height: 50,
    marginTop: 10,
    overflow: "hidden",
    width: 50
  }
});

export { Comment };
