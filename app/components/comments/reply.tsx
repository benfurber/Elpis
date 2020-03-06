import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ActionSheet from "react-native-actionsheet";

import { ActionSheetReply, Avatar, RichTextDisplay, Title } from "components";
import { NavigationType, Reply as ReplyInterface } from "interfaces";
import { labels } from "labels";
import { colours, elements, layout } from "styles";
import { formatDate } from "utils";

interface Props {
  item: ReplyInterface;
  navigation: NavigationType;
}

interface State {
  deleting: boolean;
}

class Reply extends Component<Props, State> {
  ActionSheet = ActionSheet;

  state = {
    deleting: false,
  };

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
        <ActionSheetReply
          refProp={o => (this.ActionSheet = o)}
          navigation={navigation}
          item={item}
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
