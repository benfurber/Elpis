import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import { Avatar } from "components";
import { NavigationType, Message as MessageInterface } from "interfaces";
import { colours, layout } from "styles";
import { formatDate } from "utils";

interface Props {
  currentUser: boolean;
  item: MessageInterface;
  navigation: NavigationType;
}

interface State {
  deleting: boolean;
}

class Message extends Component<Props, State> {
  state = {
    deleting: false,
  };

  render() {
    const { currentUser, item } = this.props;
    const { content, createdAt, author } = item;
    const { deleting } = this.state;

    const opacity = deleting ? 0.5 : 1;
    const userStyle = {
      container: currentUser ? styles.authorContainer : styles.userContainer,
      date: currentUser ? styles.authorDate : styles.userDate,
      text: currentUser ? styles.authorText : styles.userText,
    };

    return (
      <TouchableOpacity>
        <View style={[styles.container, userStyle.container]}>
          <View style={[styles.avatarContainer]}>
            <Avatar avatarPath={author.avatarPath} size="xs" />
          </View>

          <View style={[styles.messageContainer]}>
            <View style={[styles.textContainer, userStyle.text, { opacity }]}>
              <Text>{content}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.dateContainer, userStyle.date]}>
          <Text style={styles.date}>{formatDate(createdAt)}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  authorContainer: {
    flexDirection: "row",
    marginLeft: layout.spacingL,
  },
  authorDate: {
    alignItems: "flex-end",
  },
  authorText: {
    backgroundColor: colours.navyBlueLight,
    borderBottomLeftRadius: layout.borderRadiusL,
    borderTopLeftRadius: layout.borderRadiusL,
    marginLeft: layout.spacingL,
  },
  avatarContainer: {
    margin: 5,
    position: "absolute",
    zIndex: 1,
  },
  container: {
    alignItems: "center",
  },
  date: {
    color: colours.mediumGrey,
    fontSize: 12,
  },
  dateContainer: {
    marginBottom: layout.spacing,
    marginTop: layout.spacingXS,
    paddingHorizontal: 25,
  },
  messageContainer: {
    width: "100%",
  },
  textContainer: {
    paddingHorizontal: layout.spacingL + 5,
    paddingVertical: layout.spacingL,
  },
  userContainer: {
    flexDirection: "row-reverse",
    marginLeft: layout.spacingL,
  },
  userDate: {
    alignItems: "flex-start",
  },
  userText: {
    backgroundColor: colours.pureWhite,
    borderBottomRightRadius: layout.borderRadiusL,
    borderTopRightRadius: layout.borderRadiusL,
    marginRight: layout.spacingL,
  },
});

export { Message };
