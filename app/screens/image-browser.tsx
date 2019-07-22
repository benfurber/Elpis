import React, { Component } from "react";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { BackgroundContainer } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { colours } from "styles";

const { width } = Dimensions.get("window");
const borderWidth = 3;
const imageWidth = width / 3 - borderWidth * 2;

interface Props {
  navigation: NavigationType;
  images: any;
  selectImage: (number) => any;
  sendImage: () => void;
}

class ImageBrowserScreen extends Component<Props> {
  static navigationOptions = ({ navigation, sendImage }) => {
    const button = (
      <Button
        onPress={() => {
          navigation.pop();
          return sendImage();
        }}
        title={labels.select}
        color={colours.darkGrey}
      />
    );

    return {
      title: "Photos",
      headerRight: button,
    };
  };

  state = {
    index: null,
  };

  setIndex = index => {
    const { navigation, selectImage } = this.props;

    if (index === this.state.index) {
      index = null;
    }
    this.setState({ index });
    navigation.setParams({ index });

    return selectImage(index);
  };

  renderItem(item, index) {
    const selectStyles =
      index === this.state.index
        ? styles.selectedHighlight
        : styles.unselectedHighlight;
    const underlayColor =
      index === this.state.index ? "transparent" : colours.emeraldGreen;

    return (
      <TouchableHighlight
        key={index}
        onPress={() => this.setIndex(index)}
        style={[styles.highlight, selectStyles]}
        underlayColor={underlayColor}
      >
        <Image
          style={{
            width: imageWidth,
            height: imageWidth,
          }}
          source={{ uri: item.node.image.uri }}
        />
      </TouchableHighlight>
    );
  }

  renderImageLoop() {
    const { images } = this.props;

    return images.map((image, index) => this.renderItem(image, index));
  }

  render() {
    return (
      <BackgroundContainer>
        <View style={styles.container}>{this.renderImageLoop()}</View>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  highlight: {
    borderWidth,
  },
  selectedHighlight: {
    borderColor: colours.emeraldGreen,
    opacity: 0.5,
  },
  unselectedHighlight: {
    opacity: 1,
    borderColor: colours.whiteTransparentHigh,
  },
});

const wrapped = withMappedNavigationParams()(ImageBrowserScreen);
export { wrapped as ImageBrowserScreen };
