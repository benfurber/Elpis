import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { Icon } from "components";
import { layout, colours } from "styles";

interface Props {
  containerStyle?: object;
  level?: number;
  size?: number;
}

class IconDiscussionLevel extends Component<Props> {
  render() {
    const { containerStyle, size } = this.props;
    const level = this.props.level || 0;

    const backgroundColours = [
      "rgb(186, 202, 214)",
      "rgb(144, 171, 190)",
      "rgb(117, 150, 173)",
    ];
    const icons = ["holly-berry", "seedling", "spa"];

    const height = size ? size * 2 : 40;

    const styles = StyleSheet.create({
      icon: {
        alignItems: "center",
        borderRadius: height,
        flexDirection: "row",
        height,
        justifyContent: "center",
        padding: layout.spacing,
        width: height,
      },
    });

    return (
      <Icon
        name={icons[level]}
        containerStyle={[
          { ...styles.icon, ...containerStyle },
          { backgroundColor: backgroundColours[level] },
        ]}
        size={size || 18}
        colour={colours.pureWhite}
      />
    );
  }
}

export { IconDiscussionLevel };
