import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { NavigationType, Notification as NotificationType } from "interfaces";
import { colours, layout } from "styles";

import { Avatar } from "./avatar";
import { Details } from "./details";
import { Title } from "./title";

interface Props {
  item: NotificationType;
  navigation: NavigationType;
}

class Notification extends Component<Props> {
  onPress = () => {
    const { content, type, postId } = this.props.item;
    const { id } = content;

    const postParams = {
      id,
      setDisplay: "body",
    };
    const replyParams = {
      id: postId,
      commentId: id,
      setDisplay: "comments",
    };

    const params = type === "comment" ? replyParams : postParams;
    return this.props.navigation.navigate("Post", params);
  };

  render() {
    return (
      <TouchableOpacity style={styles.item} onPress={this.onPress}>
        <View style={styles.row}>
          <Avatar item={this.props.item} />
          <Title item={this.props.item} />
        </View>
        <Details item={this.props.item} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: colours.whiteTransparent,
    marginBottom: layout.spacing,
    padding: layout.spacing,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export { Notification };
