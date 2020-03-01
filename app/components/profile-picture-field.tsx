import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { PhotoIdentifier } from "@react-native-community/cameraroll";

import { Avatar, ButtonSubmit } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { USER_AVATAR } from "queries";
import { colours, elements, layout } from "styles";
import { client } from "utils";

interface Props {
  clearUploadCondition: () => void;
  display: "active" | "error" | "loading";
  navigation: NavigationType;
  image: null | PhotoIdentifier;
  sendImage: (PhotoIdentifier) => void;
}

interface State {
  currentAvatarPath: string | null;
}

class ProfilePictureField extends Component<Props, State> {
  state = {
    currentAvatarPath: null,
  };

  async componentDidMount() {
    if (!this.props.image) {
      const query = USER_AVATAR;
      const response = await client.query({
        fetchPolicy: "network-only",
        query,
      });
      const currentAvatarPath = response.data.me.avatarPath;
      this.setState({ currentAvatarPath });
    }
  }

  navigateToImageBrowser() {
    return this.props.navigation.navigate("ImageBrowser", {
      sendImage: image => this.props.sendImage(image),
    });
  }

  onPress() {
    this.props.clearUploadCondition();
    return this.navigateToImageBrowser();
  }

  renderAvatar() {
    const { display, image } = this.props;
    const { currentAvatarPath } = this.state;
    const errorStyle = display === "error" ? styles.imageContainerError : null;

    let path;
    image ? (path = image.node.image.uri) : (path = currentAvatarPath);

    return (
      <View style={[styles.imageContainer, errorStyle]}>
        <Avatar avatarPath={path} size="feature" />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.row}>
        {this.renderAvatar()}
        <ButtonSubmit
          display={this.props.display}
          label={labels.addPhoto}
          onPress={() => this.onPress()}
          small
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    ...elements.imageRoundFeature,
  },
  imageContainer: {
    borderColor: colours.emeraldGreen,
    borderRadius: elements.imageRoundFeature.borderRadius,
    borderStyle: "dashed",
    borderWidth: 2,
    margin: layout.spacingS,
    marginRight: layout.spacing,
    padding: 2,
  },
  imageContainerError: {
    borderColor: colours.red,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: layout.spacingL,
  },
});

export { ProfilePictureField };
