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
  render() {
    const { imagePath } = this.props;

    return <FlexImage source={{ uri: imagePath }} />;
  }
}

export { RemoteImage };
