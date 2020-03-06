import React, { Component } from "react";
import ActionSheet from "react-native-actionsheet";

import { Comment, NavigationType } from "interfaces";
import { labels } from "labels";

interface Props {
  item: Comment;
  navigation: NavigationType;
  refProp: any;
}

class ActionSheetComment extends Component<Props> {
  onPress(index) {
    if (index === 1) console.log("Delete");
    if (index === 2) console.log("Update");
  }

  render() {
    const { refProp } = this.props;
    const { cancel } = labels;

    const options = [cancel, "Delete comment", "Edit comment"];

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
