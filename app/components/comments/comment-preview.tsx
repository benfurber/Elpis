import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import ActionSheet from "react-native-actionsheet";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  AuthorInfo,
  Badge,
  IconDiscussionLevel,
  Icon,
  ActionSheetComment,
} from "components";
import { Comment as CommentInterface, NavigationType, Post } from "interfaces";
import { colours, elements, layout } from "styles";

interface Props {
  backToText?: string;
  item: CommentInterface;
  navigation: NavigationType;
  postId: Post["id"];
  totalComments: number;
}

class CommentPreview extends Component<Props> {
  ActionSheet = ActionSheet;

  displayContent() {
    const { content } = this.props.item;
    const characterLimit = 250;

    if (!content || content.length < characterLimit) return content;

    return content.substring(0, characterLimit) + "...";
  }

  pressActionIcon() {
    const { totalReplies } = this.props.item;

    if (totalReplies > 0) {
      return <Badge left={0} number={totalReplies} staticPosition />;
    }

    return (
      <Icon
        colour={colours.navyBlueDarkTransparentHigh}
        name="angle-double-right"
      />
    );
  }

  onLongPress() {
    const { isAuthorCurrentUser } = this.props.item;

    if (isAuthorCurrentUser) {
      this.ActionSheet.show();
    }
  }

  render() {
    const { backToText, item, navigation, postId, totalComments } = this.props;
    const { discussionLevel, id } = item;

    const onPress = () =>
      navigation.navigate("Reply", {
        backToText,
        id,
        isFromTopic: true,
        postId,
        totalComments,
      });

    return (
      <TouchableOpacity
        onPress={onPress}
        onLongPress={() => this.onLongPress()}
      >
        <View style={styles.commentContainer}>
          <View style={styles.headerRow}>
            <View style={styles.titleContainer}>
              <AuthorInfo navigation={navigation} item={item} />
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryIconContainer}>
                <IconDiscussionLevel
                  containerStyle={{ borderBottomRightRadius: 0 }}
                  level={discussionLevel}
                />
              </View>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.text}>{this.displayContent()}</Text>
            <View style={styles.iconContainer}>{this.pressActionIcon()}</View>
          </View>
        </View>
        <ActionSheetComment
          item={item}
          navigation={navigation}
          postId={postId}
          refProp={o => (this.ActionSheet = o)}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: "center",
    flexDirection: "row",
    width: 60,
  },
  categoryContainer: {
    alignItems: "flex-end",
    width: 40,
  },
  categoryIconContainer: {
    borderBottomRightRadius: 0,
    borderColor: colours.pureWhite,
    borderRadius: 30,
    borderWidth: 5,
    overflow: "hidden",
    position: "absolute",
    right: -10,
    top: -30,
    zIndex: 1,
  },
  commentContainer: {
    alignItems: "stretch",
    backgroundColor: colours.pureWhite,
    borderRadius: layout.borderRadiusL,
    flex: 1,
    marginBottom: layout.spacingL,
    marginLeft: layout.spacing,
    marginTop: 20,
    padding: layout.spacing,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    marginVertical: layout.spacing,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    alignItems: "center",
    flexDirection: "row",
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

export { CommentPreview };
