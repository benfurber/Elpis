import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import { Icon } from "components";
import { layout, colours } from "styles";

interface Props {
  action: () => void | null;
  isActive: boolean;
  name: string;
}

class IconNav extends Component<Props> {
  render() {
    const { action, isActive, name } = this.props;
    const activeColour = colours.pureWhite;
    const inactiveColour = colours.whiteTransparentHigh;

    return (
      <TouchableOpacity onPress={action}>
        <Icon
          style={styles.icon}
          name={name}
          colour={isActive ? activeColour : inactiveColour}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    padding: layout.spacing,
  },
});

export { IconNav };
