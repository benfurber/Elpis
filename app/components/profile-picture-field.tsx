import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import CameraRoll, {
  PhotoIdentifier,
} from "@react-native-community/cameraroll";

import { ButtonSubmit } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { colours, elements, layout } from "styles";

interface Props {
  display: "active" | "error" | "loading";
  navigation: NavigationType;
  image: null | any;
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
    });
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
    const annonProfilePath = "../assets/images/profile-pic-annon.png";

    const file = image
      ? { uri: image.node.image.uri }
      : require(annonProfilePath);

    const errorStyle = display === "error" ? styles.imageContainerError : null;

    return (
      <View style={[styles.imageContainer, errorStyle]}>
        <Image style={styles.image} source={file} />
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
          onPress={() => this.handleButtonPress()}
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
