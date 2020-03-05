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

  render() {
    const { refProp } = this.props;
    const { cancel, deleteYourReply, editReply } = labels;

    return (
      <ActionSheet
        ref={refProp}
        options={[cancel, deleteYourReply, editReply]}
        cancelButtonIndex={0}
        onPress={index => this.actionSheetOnPress(index)}
      />
    );
  }
}

export { ActionSheetReply };
