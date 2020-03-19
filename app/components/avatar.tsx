import React, { Component } from "react";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Author, NavigationType } from "interfaces";
import { elements } from "styles";

const annonProfilePath = "../assets/images/profile-pic-annon.png";

interface Props {
  avatarPath: null | Author["avatarPath"];
  containerStyles?: object;
  navigation?: NavigationType;
  userId?: Author["id"];
  size?: "small" | "medium" | "large" | "xl" | "feature";
  styles?: object;
}

class Avatar extends Component<Props> {
  onPress() {
    const { navigation, userId } = this.props;

    if (navigation && userId) {
      navigation.navigate("UserProfile", {
        navigation,
        userId,
      });
    }
  }

  render() {
    const { avatarPath, containerStyles, size, styles } = this.props;

    const path = avatarPath ? { uri: avatarPath } : require(annonProfilePath);

    const styleSet = {
      feature: elements.imageRoundFeature,
      large: elements.imageRoundLarge,
      medium: elements.imageRound,
      small: elements.imageRoundSmall,
      xl: elements.imageRoundXL,
    };

    return (
      <View style={containerStyles}>
        <TouchableOpacity onPress={() => this.onPress()}>
          <Image source={path} style={[styleSet[size || "medium"], styles]} />
        </TouchableOpacity>
      </View>
    );
  }
}

export { Avatar };
