import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { colours, layout } from "styles";

interface Props {
  display: "passive" | "warn" | "error";
  messages: (string | null)[];
}

class MessageBox extends Component<Props> {
  renderMessages() {
    const { messages } = this.props;

    if (messages) {
      return messages.map((message, index) => {
        return <Text key={index}>{message}</Text>;
      });
    }
  }

  render() {
    const { messages, display } = this.props;

    const style = {
      error: styles.messagesError,
      passive: styles.messagesPassive,
      warn: styles.messagesWarn,
    };

    if (messages) {
      return (
        <View style={[styles.messages, style[display]]}>
          {this.renderMessages()}
        </View>
      );
    }
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
