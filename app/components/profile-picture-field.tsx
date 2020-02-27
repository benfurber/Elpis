import React, { Component } from "react";
import { PermissionsAndroid, Platform, StyleSheet, View } from "react-native";
import CameraRoll, {
  PhotoIdentifier,
} from "@react-native-community/cameraroll";

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
  sendImage: () => void;
  setImage: (PhotoIdentifier) => void;
}

interface State {
  currentAvatarPath: string | null;
  images: PhotoIdentifier[];
}

class ProfilePictureField extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      currentAvatarPath: null,
      images: [],
    };
  }

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
          buttonNegative: labels.cancel,
          buttonNeutral: labels.askMeLater,
          buttonPositive: labels.ok,
          message: labels.permissionRequestPhotoLibraryBody,
          title: labels.permissionRequestPhotoLibraryBody,
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
      assetType: "Photos",
      first: 500,
    })
      .then(response => {
        this.setState({ images: response.edges });
        return this.navigateToImageBrowser();
      })
      .catch(error => {
        console.error(error);
      });
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
