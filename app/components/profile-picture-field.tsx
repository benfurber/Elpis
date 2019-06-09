import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import CameraRoll, {
  PhotoIdentifier,
} from "@react-native-community/cameraroll";

import { ButtonSubmit } from "components";
import { NavigationType } from "interfaces";
import { colours, elements, layout, typography } from "styles";

const labels = {
  addPhoto: "Add photo",
};

interface Props {
  display: "active" | "error" | "loading";
  navigation: NavigationType;
}

interface State {
  images: PhotoIdentifier[];
  selectedImage: null | any;
}

class ProfilePictureField extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selectedImage: null,
    };
  }

  selectImage(index) {
    this.setState({
      selectedImage: this.state.images[index],
    });
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
    const { display } = this.props;
    const { selectedImage } = this.state;
    const annonProfilePath = "../assets/images/profile-pic-annon.png";

    const file = selectedImage
      ? { uri: selectedImage.node.image.uri }
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
