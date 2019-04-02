import React from "react";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";

import { Post } from "interfaces";
import { colours, layout, typography } from "styles";
import { firstSentence } from "utils";

import { Comment } from "./comment";

interface Props {
  comments: Post["comments"];
  description: Post["description"];
}

const Comments = (props: Props) => {
  const renderDescription = () => {
    if (props.description) {
      return (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{firstSentence(props.description)}</Text>
        </View>
      );
    }
  };

  const renderComments = () => {
    if (props.comments) {
      return (
        <FlatList
          data={props.comments}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => <Comment item={item} />}
        />
      );
    }
  };

  const topLevelComments = () => {
    return props.comments.length;
  };

  const totalComments = () => {
    if (props.comments) {
      let runningTotal = 0;
      props.comments.forEach(comment => {
        runningTotal = +comment.totalReplies;
      });

      return runningTotal;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {renderDescription()}
        <View style={styles.commentsHeadingContainer}>
          <Text style={styles.commentsHeading}>
            {totalComments()} Comments - {topLevelComments()} Topics
          </Text>
        </View>
        {renderComments()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    width: 60
  },
  container: {
    backgroundColor: colours.whiteTransparent,
    borderTopRightRadius: layout.borderRadius,
    padding: layout.spacing,
    width: "100%"
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
  commentsHeadingContainer: {
    marginBottom: layout.spacing
  },
  commentsHeading: {
    fontSize: typography.fontSizeL,
    fontWeight: "bold"
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
  titleContainer: {
    backgroundColor: colours.whiteTransparent,
    borderRadius: layout.borderRadius,
    marginBottom: layout.spacing,
    padding: layout.spacing
  },
  title: {
    fontSize: typography.fontSizeL,
    fontWeight: "bold"
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

export { Comments };
