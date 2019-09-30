import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Notification as NotificationType } from "interfaces";
import { colours, layout } from "styles";

import { Avatar } from "./avatar";
import { Details } from "./details";
import { Title } from "./title";

interface Props {
  item: NotificationType;
}

class Notification extends Component<Props> {
  render() {
    return (
      <TouchableOpacity style={styles.item} onPress={() => null}>
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
