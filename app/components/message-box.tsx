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

    const name = {
      error: "exclamation-triangle",
      passive: "info-circle",
      warn: "exclamation-circle",
    };

    const styles = StyleSheet.create({
      icon: {
        marginRight: layout.spacingS,
      },
      messages: {
        alignItems: "center",
        backgroundColor: colours.whiteTransparentHigh,
        borderColor: colour[display],
        borderRadius: layout.borderRadiusL,
        borderWidth: 2,
        flexDirection: "row",
        marginBottom: layout.spacingL,
        marginTop: layout.spacing,
        padding: layout.spacingS,
      },
    });

    if (message) {
      return (
        <View style={styles.messages}>
          <Icon
            colour={colour[display]}
            name={name[display]}
            style={styles.icon}
          />
          <Text>{message}</Text>
        </View>
      );
    }

    return null;
  }
}

export { MessageBox };
