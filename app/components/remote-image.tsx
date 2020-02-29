import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";

import { layout } from "styles";

interface Props {
  imagePath: string;
}

interface State {
  height: number;
  width: number;
}

class RemoteImage extends Component<Props, State> {
  state = {
    height: 0,
    width: 0,
  };

  componentDidMount() {
    const { imagePath } = this.props;
    const { height } = this.state;

    if (height === 0) {
      Image.getSize(
        imagePath,
        (width, height) => {
          this.setState({ height, width });
        },
        err => console.error(err),
      );
    }
  }

  render() {
    const { imagePath } = this.props;
    const { height, width } = this.state;

    return (
      <Image
        style={[styles.image, { height, width }]}
        source={{ uri: imagePath }}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    borderRadius: layout.borderRadius,
    height: 80,
    width: 80,
  },
});

export { RemoteImage };
