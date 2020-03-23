import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ActionSheet from "react-native-actionsheet";

import { Avatar, Badge, Icon, Title, ActionSheetComment } from "components";
import { Comment as CommentInterface, NavigationType, Post } from "interfaces";
import { colours, elements, layout } from "styles";
import { firstSentence, formatDate } from "utils";

interface Props {
  item: CommentInterface;
  navigation: NavigationType;
  onPress: (number) => void;
  postId: Post["id"];
}

class CommentPreview extends Component<Props> {
  ActionSheet = ActionSheet;

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
    const { item, navigation, onPress, postId } = this.props;
    const { author, content, id, publishedAt, title } = item;

    return (
      <TouchableOpacity
        onPress={() => onPress(id)}
        onLongPress={() => this.onLongPress()}
      >
        <View style={styles.commentContainer}>
          <View style={styles.headerRow}>
            <View style={styles.avatarContainer}>
              <Avatar
                avatarPath={author.avatarPath}
                navigation={navigation}
                userId={author.id}
              />
            </View>
            <View style={styles.titleContainer}>
              {title && <Title text={title} />}
              <Text style={styles.metaDetails}>
                <Text style={styles.name}>{`${author.name} `}</Text>
                {formatDate(publishedAt, false)}
              </Text>
            </View>
            <View style={styles.categoryContainer}>
              <Icon
                colour={colours.pureWhite}
                containerStyle={styles.categoryIconContainer}
                name="holly-berry"
                size={18}
              />
            </View>
          </View>
          <View style={styles.contentContainer}>
            {content && (
              <Text style={styles.text}>{firstSentence(content)}</Text>
            )}
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
    zIndex: 99,
  },
  categoryIconContainer: {
    backgroundColor: "rgb(186, 202, 214)",
    borderBottomRightRadius: 0,
    borderColor: colours.pureWhite,
    borderRadius: 30,
    borderWidth: 5,
    padding: layout.spacing,
    position: "absolute",
    right: -10,
    top: -30,
    zIndex: 99,
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
    marginRight: layout.spacingXS,
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
  },
  titleContainer: {
    flex: 1,
  },
});

export { CommentPreview };
