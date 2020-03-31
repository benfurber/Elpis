import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import ActionSheet from "react-native-actionsheet";
import { TouchableOpacity } from "react-native-gesture-handler";

import { ActionSheetReply, Avatar, RichTextDisplay } from "components";
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
    const { author, edited, isAuthorCurrentUser, publishedAt } = item;
    const { deleting } = this.state;

    const opacity = deleting ? 0.5 : 1;

    return (
      <TouchableOpacity
        onLongPress={() => this.onLongPress()}
        disabled={!isAuthorCurrentUser}
      >
        <View style={[styles.commentContainer, { opacity }]}>
          <View style={styles.textContainer}>
            <RichTextDisplay item={item} navigation={navigation} />
          </View>
          <View style={styles.details}>
            <View style={styles.avatarContainer}>
              <Avatar
                avatarPath={author.avatarPath}
                navigation={navigation}
                size="large"
                userId={author.id}
              />
            </View>

            <View style={styles.authorDetails}>
              <Text style={styles.metaDetails}>
                <Text style={styles.name}>{`${author.name} `}</Text>
                {formatDate(publishedAt, false)}
                {edited && ` (${labels.editedReply})`}
              </Text>
            </View>
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
  avatarContainer: {
    ...elements.imageRoundLarge,
    alignItems: "center",
    borderColor: colours.pureWhite,
    borderWidth: 5,
    top: 15,
  },
  body: {
    paddingVertical: layout.spacing,
  },
  commentContainer: {
    backgroundColor: colours.pureWhite,
    borderRadius: layout.borderRadiusL,
    margin: layout.spacing,
    marginBottom: layout.spacingL,
    paddingHorizontal: layout.spacingL,
    paddingTop: layout.spacing,
  },
  details: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  metaDetails: {
    marginBottom: layout.spacing,
    ...elements.textDate,
  },
  name: {
    color: colours.navyBlueDark,
    fontWeight: "bold",
  },
  textContainer: {
    paddingTop: layout.spacing,
  },
});

export { Reply };
