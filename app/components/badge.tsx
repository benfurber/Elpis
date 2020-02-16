import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { colours, typography } from "styles";

interface Props {
  left: number;
  number;
  staticPosition?: boolean;
}

class Badge extends Component<Props> {
  left() {
    return { left: this.props.left };
  }

  render() {
    const { left, number, staticPosition } = this.props;
    const { badgeContainer, dynamicPosition, text } = styles;

    if (number > 0) {
      const howFarLeft = { left };
      const dynamicStyles = staticPosition ? null : dynamicPosition;

      return (
        <View style={[badgeContainer, howFarLeft, dynamicStyles]}>
          <Text style={text}>{number}</Text>
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  badgeContainer: {
    alignItems: "center",
    backgroundColor: colours.navyBlueDark,
    borderRadius: 11,
    flexDirection: "column",
    height: 22,
    justifyContent: "center",
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

export { Badge };
