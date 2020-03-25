import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ActionSheet from "react-native-actionsheet";
import { TouchableOpacity } from "react-native-gesture-handler";

import { ActionSheetComment, Avatar, Title } from "components";
import { Comment as CommentType, NavigationType, Post } from "interfaces";
import { labels } from "labels";
import { colours, elements, layout } from "styles";
import { formatDate } from "utils";

interface Props {
  item: CommentType;
  navigation: NavigationType;
  postId: Post["id"];
}

class Comment extends Component<Props> {
  ActionSheet = ActionSheet;

  onLongPress() {
    const { isAuthorCurrentUser } = this.props.item;

    if (isAuthorCurrentUser) {
      this.ActionSheet.show();
    }
  }

  render() {
    const { item, navigation, postId } = this.props;
    const { author, content, edited, publishedAt, title } = item;

    return (
      <TouchableOpacity onLongPress={() => this.onLongPress()}>
        <View style={styles.featured}>
          <View style={styles.featuredDetails}>
            <Avatar
              avatarPath={author.avatarPath}
              navigation={navigation}
              size={"large"}
              userId={author.id}
            />

            <View style={styles.featuredAuthorDetails}>
              <Title text={author.name} />
              <Text style={elements.textDate}>
                {formatDate(publishedAt)}
                {edited && ` (${labels.editedComment})`}
              </Text>
            </View>
          </View>

          <View>
            {title && <Title text={title} small bold />}
            {content && <Text>{content}</Text>}
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
  featured: {
    backgroundColor: colours.transparentBlue,
    marginBottom: layout.spacingL,
    paddingHorizontal: layout.spacing,
    paddingVertical: layout.spacingL,
  },
  featuredAuthorDetails: {
    paddingLeft: layout.spacing,
  },
  featuredDetails: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: layout.spacing,
  },
});

export { Comment };
