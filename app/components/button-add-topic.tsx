import React, { Component } from "react";

import { ButtonOverlay } from "components";
import { NavigationType, Post } from "interfaces";
import { labels } from "labels";

interface Props {
  navigation: NavigationType;
  postId: Post["id"];
}

class ButtonAddTopic extends Component<Props> {
  onPress() {
    const { postId } = this.props;
    return this.props.navigation.navigate("AddTopic", { postId });
  }

  render() {
    return (
      <ButtonOverlay onPress={() => this.onPress()} text={labels.addNewTopic} />
    );
  }
}

export { ButtonAddTopic };
