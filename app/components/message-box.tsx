import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Icon } from "components";
import { colours, layout } from "styles";

interface Props {
  display: "passive" | "warn" | "error";
  message: null | string;
}

class MessageBox extends Component<Props> {
  render() {
    const { message, display } = this.props;

    const colour = {
      error: colours.red,
      passive: colours.navyBlueDark,
      warn: "orange",
    };

    const name = display === "error" ? "exclamation-triangle" : "info-circle";

    const styles = StyleSheet.create({
      icon: {
        marginRight: layout.spacing,
      },
      messages: {
        alignItems: "center",
        backgroundColor: colours.whiteTransparentHigh,
        borderColor: colour[display],
        borderRadius: layout.borderRadiusL,
        borderWidth: 2,
        flexDirection: "row",
        marginVertical: layout.spacingL,
        padding: layout.spacing,
      },
    });

    if (message) {
      return (
        <View style={styles.messages}>
          <Icon colour={colour[display]} name={name} style={styles.icon} />
          <Text>{message}</Text>
        </View>
      );
    }

    return null;
  }
}

export { MessageBox };
