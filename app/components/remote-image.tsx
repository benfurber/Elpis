import React, { Component } from "react";
import FlexImage from "react-native-flex-image";

interface Props {
  imagePath: string;
}

interface State {
  imageHeight: number;
  imageWidth: number;
}

class RemoteImage extends Component<Props, State> {
  validImageURL(url) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }

  render() {
    const { imagePath } = this.props;

    if (!this.validImageURL(imagePath)) {
      return null;
    }

    return <FlexImage source={{ uri: imagePath }} />;
  }
}

export { RemoteImage };
