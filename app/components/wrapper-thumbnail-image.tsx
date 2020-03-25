import React, { Component } from "react";
import { Dimensions, FlatList } from "react-native";
import { PhotoIdentifier } from "@react-native-community/cameraroll";

import { ThumbnailImage } from "components";

interface Props {
  images: PhotoIdentifier[];
  selectedImage: null | PhotoIdentifier;
  setImage: (number) => void;
}

class WrapperThumbnailImage extends Component<Props> {
  renderImage(image, index) {
    const { selectedImage, setImage } = this.props;
    const { width } = Dimensions.get("window");

    return (
      <ThumbnailImage
        image={image}
        imageIndex={index}
        selected={selectedImage === image}
        setIndexCallback={index => setImage(index)}
        width={width}
        key={index}
      />
    );
  }

  render() {
    const { images } = this.props;

    return (
      <FlatList
        data={images}
        numColumns={3}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => this.renderImage(item, index)}
      />
    );
  }
}

export { WrapperThumbnailImage };
