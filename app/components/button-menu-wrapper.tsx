import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import { Icon } from "components";
import { layout, typography, colours } from "styles";

interface Props {
  iconName: string;
  onPress: () => void;
  text: string;
}

class ButtonMenuWrapper extends Component<Props> {
  render() {
    const { iconName, onPress, text } = this.props;

    return (
      <TouchableOpacity style={styles.item} onPress={onPress}>
        <View style={styles.row}>
          <View style={styles.icon}>
            <Icon name={iconName} />
          </View>
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  icon: { flex: 1 },
  item: {
    backgroundColor: colours.whiteTransparent,
    borderBottomColor: colours.pureWhite,
    borderBottomWidth: 2,
    borderTopColor: colours.pureWhite,
    borderTopWidth: 2,
    marginBottom: layout.spacing,
    padding: layout.spacingL,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    flex: 12,
    fontSize: typography.fontSizeS,
    paddingLeft: layout.spacing,
  },
  title: {
    fontSize: typography.fontSizeXL,
    margin: layout.spacingL,
  },
});

export { ButtonMenuWrapper };
