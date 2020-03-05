import React, { Component } from "react";
import ActionSheet from "react-native-actionsheet";

import { NavigationType, Reply } from "interfaces";
import { labels } from "labels";
import { DELETE_REPLY } from "mutations";
import { client } from "utils";

interface Props {
  item: Reply;
  navigation: NavigationType;
  refProp: any;
}

class ActionSheetReply extends Component<Props> {
  async deleteReply() {
    const { id } = this.props.item;
    this.setState({ deleting: true });

    await client.mutate({
      mutation: DELETE_REPLY,
      variables: {
        id,
      },
    });
  }

  onPress(index) {
    if (index === 1) this.deleteReply();
    if (index === 2) this.updateReply();
  }

  updateReply() {
    const { item, navigation } = this.props;
    const { comment, content, id, imagePath } = item;

    const commentId = comment.id;
    const currentReply = { content, id, imagePath };

    navigation.navigate("AddReply", { commentId, currentReply });
  }

  render() {
    const { refProp } = this.props;
    const { cancel, deleteYourReply, editReply } = labels;

    const options = [cancel, deleteYourReply, editReply];

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

export { ActionSheetReply };
