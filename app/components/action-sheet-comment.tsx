import React, { Component } from "react";
import ActionSheet from "react-native-actionsheet";

import { Comment, NavigationType } from "interfaces";
import { labels } from "labels";
import { DELETE_COMMENT } from "mutations";
import { client } from "utils";

interface Props {
  item: Comment;
  navigation: NavigationType;
  postId: string;
  refProp: any;
}

class ActionSheetComment extends Component<Props> {
  async deleteComment() {
    const { id } = this.props.item;

    await client.mutate({
      mutation: DELETE_COMMENT,
      variables: {
        id,
      },
    });
  }

  onPress(index) {
    if (index === 1) this.deleteComment();
    if (index === 2) this.updateComment();
  }

  updateComment() {
    const { item, navigation, postId } = this.props;
    const { content, id, title } = item;

    const currentComment = { content, id, title };

    navigation.navigate("AddTopic", { currentComment, postId });
  }

  render() {
    const { refProp } = this.props;
    const { cancel, deleteComment, editComment } = labels;

    const options = [cancel, deleteComment, editComment];

    return (
      <ActionSheet
        ref={refProp}
        options={options}
        cancelButtonIndex={0}
        onPress={index => this.onPress(index)}
      />
    );
  }
}

export { ActionSheetComment };
