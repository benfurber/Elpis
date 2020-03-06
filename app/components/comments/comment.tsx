import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ActionSheet from "react-native-actionsheet";

import { Avatar, Badge, Icon, Title, ActionSheetComment } from "components";
import { Comment as CommentInterface, NavigationType } from "interfaces";
import { colours, elements, layout } from "styles";
import { firstSentence, formatDate } from "utils";

interface Props {
  item: CommentInterface;
  navigation: NavigationType;
  onPress: (number) => void;
}

class Comment extends Component<Props> {
  ActionSheet = ActionSheet;

  pressActionIcon() {
    const { totalReplies } = this.props.item;

    if (totalReplies > 0) {
      return <Badge left={0} number={totalReplies} staticPosition />;
    }

    return (
      <Icon
        colour={colours.navyBlueDarkTransparentHigh}
        name="angle-double-right"
      />
    );
  }

  onLongPress() {
    const { isAuthorCurrentUser } = this.props.item;

    if (isAuthorCurrentUser) {
      this.ActionSheet.show();
    }
  }

  render() {
    const { item, navigation, onPress } = this.props;
    const { author, content, id, publishedAt, title } = item;

    return (
      <TouchableOpacity
        onPress={() => onPress(id)}
        onLongPress={() => this.onLongPress()}
      >
        <View style={styles.commentContainer}>
          <View style={styles.avatarContainer}>
            <View>
              <Avatar avatarPath={author.avatarPath} />
            </View>
          </View>
          <View style={styles.commentBodyContainer}>
            {title && <Title text={title} />}
            <Text style={styles.metaDetails}>
              <Text style={styles.name}>{`${author.name} `}</Text>
              {formatDate(publishedAt, false)}
            </Text>
            {content && (
              <Text style={styles.text}>{firstSentence(content)}</Text>
            )}
          </View>
          <View style={styles.iconContainer}>{this.pressActionIcon()}</View>
        </View>
        <ActionSheetComment
          refProp={o => (this.ActionSheet = o)}
          navigation={navigation}
          item={item}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: "center",
    flexDirection: "row",
    width: 60,
  },
  commentBodyContainer: {
    flex: 1,
    marginLeft: layout.spacing,
    marginVertical: layout.spacing,
  },
  commentContainer: {
    alignItems: "stretch",
    borderTopColor: colours.pureWhite,
    borderTopWidth: 3,
    flex: 1,
    flexDirection: "row",
    margin: layout.spacing,
    marginBottom: 0,
    paddingTop: layout.spacingS,
  },
  iconContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginRight: layout.spacingXS,
  },
  metaDetails: {
    marginBottom: layout.spacing,
    ...elements.textDate,
  },
  name: {
    color: colours.navyBlueDark,
    fontWeight: "bold",
  },
  text: {
    flex: 1,
    flexWrap: "nowrap",
  },
});

export { Comment };
