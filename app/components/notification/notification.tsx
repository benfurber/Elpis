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
    const { content } = this.props.item;
    const { post, reply } = content;

    const params = {
      id: post.id,
      commentId: reply && reply.id,
      setDisplay: reply ? "comments" : "body",
    };

    return this.props.navigation.navigate("Post", params);
  };

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity style={styles.item} onPress={this.onPress}>
        <View style={styles.row}>
          <Avatar item={item} />
          <Title item={item} />
        </View>
        <Details item={item} />
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
