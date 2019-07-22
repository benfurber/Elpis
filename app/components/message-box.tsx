import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { colours, layout } from "styles";

interface Props {
  display: "passive" | "warn" | "error";
  message: null | string;
}

class MessageBox extends Component<Props> {
  render() {
    const { message, display } = this.props;

    const style = {
      error: styles.messagesError,
      passive: styles.messagesPassive,
      warn: styles.messagesWarn,
    };

    if (message) {
      return (
        <View style={[styles.messages, style[display]]}>
          <Text>{message}</Text>
        </View>
      );
    }

    return null;
  }
}

const styles = StyleSheet.create({
  messages: {
    backgroundColor: colours.whiteTransparentHigh,
    borderRadius: layout.borderRadius,
    borderWidth: 2,
    marginVertical: layout.spacingL,
    padding: layout.spacingL,
  },
  messagesError: {
    borderColor: colours.red,
  },
  messagesPassive: {
    borderColor: colours.navyBlueDark,
  },
  messagesWarn: {
    borderColor: "orange",
  },
});

export { MessageBox };
