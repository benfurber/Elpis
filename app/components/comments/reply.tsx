import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ActionSheet from "react-native-actionsheet";

import { Avatar, RichTextDisplay, Title } from "components";
import { NavigationType, Reply as ReplyInterface } from "interfaces";
import { labels } from "labels";
import { DELETE_REPLY } from "mutations";
import { colours, elements, layout } from "styles";
import { client, formatDate } from "utils";

interface Props {
  item: ReplyInterface;
  navigation: NavigationType;
}

class Reply extends Component<Props> {
  ActionSheet = ActionSheet;

  state = {
    deleting: false,
  };

  async actionSheetOnPress(index) {
    if (index === 1) {
      const { id } = this.props.item;
      this.setState({ deleting: true });

      await client.mutate({
        mutation: DELETE_REPLY,
        variables: {
          id,
        },
      });
    }

    if (index === 2) {
      const { item, navigation } = this.props;
      const { comment, content, id, imagePath } = item;

      const commentId = comment.id;
      const currentReply = { content, id, imagePath };

      navigation.navigate("AddReply", { commentId, currentReply });
    }
  }

  onLongPress() {
    const { isAuthorCurrentUser } = this.props.item;

    if (isAuthorCurrentUser) {
      this.ActionSheet.show();
    }
  }

  render() {
    const { item, navigation } = this.props;
    const { author, edited, publishedAt } = item;
    const { deleting } = this.state;
    const { cancel, deleteYourReply, editReply } = labels;

    const opacity = deleting ? 0.5 : 1;

    return (
      <TouchableOpacity onLongPress={() => this.onLongPress()}>
        <View style={[styles.commentContainer, { opacity }]}>
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
        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          options={[cancel, deleteYourReply, editReply]}
          cancelButtonIndex={0}
          onPress={index => this.actionSheetOnPress(index)}
        />
      </TouchableOpacity>
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
