import React, { Component } from "react";

import { ButtonOverlay } from "components";
import { Comment, NavigationType } from "interfaces";
import { labels } from "labels";

interface Props {
  commentId: Comment["id"];
  navigation: NavigationType;
}

class ButtonAddReply extends Component<Props> {
  onPress() {
    const { commentId } = this.props;
    return this.props.navigation.navigate("AddReply", { commentId });
  }

  render() {
    return (
      <ButtonOverlay
        onPress={() => this.onPress()}
        text={labels.addYourReply}
      />
    );
  }
}

export { ButtonAddReply };
