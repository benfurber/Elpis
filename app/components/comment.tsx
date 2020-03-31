import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import ActionSheet from "react-native-actionsheet";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  ActionSheetComment,
  AuthorInfo,
  IconDiscussionLevel,
  Title,
} from "components";
import { Comment as CommentType, NavigationType } from "interfaces";
import { colours, layout } from "styles";

interface Props {
  item: CommentType;
  navigation: NavigationType;
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
    const { item, navigation } = this.props;
    const { content, discussionLevel, isAuthorCurrentUser, post, title } = item;

    return (
      <TouchableOpacity
        onLongPress={() => this.onLongPress()}
        disabled={!isAuthorCurrentUser}
      >
        <View style={styles.featured}>
          <View style={styles.categoryContainer}>
            <View style={styles.categoryIconContainer}>
              <IconDiscussionLevel
                containerStyle={{ borderBottomLeftRadius: 0 }}
                level={discussionLevel}
                size={25}
              />
            </View>
          </View>

          <View style={styles.body}>
            <AuthorInfo navigation={navigation} item={item} />

            <Text style={styles.content}>{content}</Text>
          </View>
        </View>

        {post && (
          <ActionSheetComment
            item={item}
            navigation={navigation}
            postId={post.id}
            refProp={o => (this.ActionSheet = o)}
          />
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    marginHorizontal: layout.spacingXL,
    marginTop: layout.spacing,
  },
  categoryContainer: {
    alignItems: "flex-end",
    width: 40,
  },
  categoryIconContainer: {
    borderBottomLeftRadius: 0,
    borderColor: colours.navyBlueLight,
    borderRadius: 30,
    borderWidth: 5,
    left: -10,
    overflow: "hidden",
    position: "absolute",
    top: -40,
    zIndex: 1,
  },
  content: {
    marginTop: layout.spacing,
  },
  featured: {
    backgroundColor: colours.navyBlueLight,
    borderBottomRightRadius: layout.borderRadiusL,
    borderTopRightRadius: layout.borderRadiusL,
    marginRight: layout.spacing,
    marginVertical: layout.spacingL,
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
