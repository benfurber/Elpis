import React, { Component } from "react";
import {
  PermissionsAndroid,
  Platform,
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { withMappedNavigationParams } from "react-navigation-props-mapper";
import CameraRoll, {
  PhotoIdentifier,
} from "@react-native-community/cameraroll";

import { BackgroundContainer, Icon, ThumbnailImageBrowser } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { colours, layout } from "styles";

interface Props {
  navigation: NavigationType;
  selectImage: (number) => any;
  sendImage: (image) => void;
}

interface State {
  accessPermission: boolean;
  images: PhotoIdentifier[];
  selectedImage: null | PhotoIdentifier;
}

class ImageBrowserScreen extends Component<Props, State> {
  state = {
    accessPermission: false,
    images: [],
    selectedImage: null,
  };

  componentDidMount() {
    const { accessPermission } = this.state;
    if (!accessPermission) {
      if (Platform.OS === "android") {
        this.androidPermissionWrapper();
      } else {
        this.setState({ accessPermission: true });
      }
    }

    CameraRoll.getPhotos({
      assetType: "Photos",
      first: 500,
    })
      .then(response => {
        this.setState({ images: response.edges });
      })
      .catch(error => {
        console.error(error);
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
        return this.setState({ accessPermission: true });
      }
    } catch (err) {
      console.warn(err);
    }
  }

  backAction() {
    const { navigation, sendImage } = this.props;
    const { selectedImage } = this.state;

    if (selectedImage) {
      return (
        <View style={styles.button}>
          <Button
            onPress={() => {
              navigation.pop();
              return sendImage(selectedImage);
            }}
            title={labels.select}
            color={colours.pureWhite}
          />
        </View>
      );
    }

    return (
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Icon name="times-circle" size={30} />
      </TouchableOpacity>
    );
  }

  setImage = index => {
    const { images } = this.state;

    this.setState({ selectedImage: images[index] });
  };

  renderImage(image, index) {
    const { selectedImage } = this.state;
    const { width } = Dimensions.get("window");

    return (
      <ThumbnailImageBrowser
        image={image}
        imageIndex={index}
        selected={selectedImage === image}
        setIndexCallback={index => this.setImage(index)}
        width={width}
      />
    );
  }

  renderImageLoop() {
    const { images } = this.state;

    return images.map((image, index) => this.renderImage(image, index));
  }

  render() {
    const { accessPermission, images } = this.state;

    return (
      <BackgroundContainer>
        <View style={styles.header}>
          <View style={styles.closeContainer}>{this.backAction()}</View>
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          {accessPermission && images && this.renderImageLoop()}
        </ScrollView>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colours.emeraldGreen,
    borderRadius: layout.borderRadius,
  },
  closeContainer: {
    flexDirection: "row-reverse",
    padding: layout.spacing,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  header: {
    height: 60,
  },
});

const wrapped = withMappedNavigationParams()(ImageBrowserScreen);
export { wrapped as ImageBrowserScreen };
