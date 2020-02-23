import React, { Component } from "react";
import { PermissionsAndroid, Platform, StyleSheet, View } from "react-native";
import CameraRoll, {
  PhotoIdentifier,
} from "@react-native-community/cameraroll";

import { Avatar, ButtonSubmit } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { colours, elements, layout } from "styles";

interface Props {
  clearUploadCondition: () => void;
  display: "active" | "error" | "loading";
  navigation: NavigationType;
  image: null | PhotoIdentifier;
  sendImage: () => void;
  setImage: (PhotoIdentifier) => void;
}

interface State {
  images: PhotoIdentifier[];
}

class ProfilePictureField extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  selectImage(index) {
    this.props.setImage(this.state.images[index]);
  }

  navigateToImageBrowser() {
    return this.props.navigation.navigate("ImageBrowser", {
      images: this.state.images,
      selectImage: index => this.selectImage(index),
      sendImage: this.props.sendImage,
    });
  }

  async androidPermissionWrapper() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: labels.permissionRequestPhotoLibraryBody,
          message: labels.permissionRequestPhotoLibraryBody,
          buttonNeutral: labels.askMeLater,
          buttonNegative: labels.cancel,
          buttonPositive: labels.ok,
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return this.handleButtonPress();
      }
    } catch (err) {
      console.warn(err);
    }
  }

  onPress() {
    if (Platform.OS === "android") {
      this.androidPermissionWrapper();
    }
    this.props.clearUploadCondition();
    return this.handleButtonPress();
  }

  handleButtonPress() {
    CameraRoll.getPhotos({
      first: 500,
      assetType: "Photos",
    })
      .then(response => {
        this.setState({ images: response.edges });
        return this.navigateToImageBrowser();
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderAvatar() {
    const { display, image } = this.props;
    const errorStyle = display === "error" ? styles.imageContainerError : null;

    let path;
    if (image) path = image.node.image.uri;

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
    borderRadius: elements.imageRoundFeature.borderRadius,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: colours.emeraldGreen,
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
