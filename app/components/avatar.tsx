import React, { Component, Fragment } from "react";
import { Image } from "react-native";

import { elements } from "styles";

const annonProfilePath = "../assets/images/profile-pic-annon.png";

interface Props {
  avatarPath: string | null;
  size?: "small" | "medium" | "large" | "xl" | "feature";
  styles?: object;
}

class Avatar extends Component<Props> {
  render() {
    const { avatarPath, size, styles } = this.props;

    const path = avatarPath ? { uri: avatarPath } : require(annonProfilePath);

    const styleSet = {
      feature: elements.imageRoundFeature,
      large: elements.imageRoundLarge,
      medium: elements.imageRound,
      small: elements.imageRoundSmall,
      xl: elements.imageRoundXL,
    };

    return (
      <Fragment>
        <Image source={path} style={[styleSet[size || "medium"], styles]} />
      </Fragment>
    );
  }
}

export { Avatar };
