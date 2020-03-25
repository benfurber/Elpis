import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { colours, typography } from "styles";

interface Props {
  colour?: string;
  left: number;
  number;
  staticPosition?: boolean;
}

class Badge extends Component<Props> {
  render() {
    const { colour, left, number, staticPosition } = this.props;

    const styles = StyleSheet.create({
      badgeContainer: {
        alignItems: "center",
        backgroundColor: colour || colours.navyBlueDark,
        borderRadius: 11,
        flexDirection: "column",
        height: 22,
        justifyContent: "center",
        left,
        width: 22,
      },
      dynamicPosition: {
        position: "absolute",
        top: -5,
        zIndex: 1,
      },
      text: {
        color: colours.pureWhite,
        fontSize: typography.fontSizeS,
      },
    });
    const { badgeContainer, dynamicPosition, text } = styles;

    if (number > 0) {
      const dynamicStyles = staticPosition ? null : dynamicPosition;

      return (
        <View style={[badgeContainer, dynamicStyles]}>
          <Text style={text}>{number}</Text>
        </View>
      );
    }
    return null;
  }
}

export { Badge };
