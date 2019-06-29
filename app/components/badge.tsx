import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { colours, typography } from "styles";

interface Props {
  left: number;
  number;
}

class Badge extends Component<Props> {
  left() {
    return { left: this.props.left };
  }

  render() {
    if (this.props.number > 0) {
      return (
        <View style={[styles.badge, this.left()]}>
          <Text style={styles.badgeText}>{this.props.number}</Text>
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  badge: {
    alignItems: "center",
    backgroundColor: colours.navyBlueDark,
    borderRadius: 11,
    flexDirection: "column",
    height: 22,
    justifyContent: "center",
    top: -5,
    position: "absolute",
    width: 22,
    zIndex: 1,
  },
  badgeText: {
    color: colours.pureWhite,
    fontSize: typography.fontSizeS,
  },
});

export { Badge };
