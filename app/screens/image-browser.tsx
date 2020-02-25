import React, { Component } from "react";
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
  TouchableOpacity,
} from "react-native";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { BackgroundContainer, Icon } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { colours, layout } from "styles";

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
  state = {
    index: null,
  };

  backAction() {
    const { navigation, sendImage } = this.props;
    const { index } = this.state;

    if (index) {
      return (
        <Button
          onPress={() => {
            navigation.pop();
            return sendImage();
          }}
          title={labels.select}
          color={colours.darkGrey}
        />
      );
    }
    return (
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Icon name="times-circle" size={30} />
      </TouchableOpacity>
    );
  }

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
            height: imageWidth,
            width: imageWidth,
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
        <View>
          <View style={styles.closeContainer}>{this.backAction()}</View>
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          {this.renderImageLoop()}
        </ScrollView>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  closeContainer: {
    flexDirection: "row-reverse",
    padding: layout.spacing,
  },
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
    borderColor: colours.whiteTransparentHigh,
    opacity: 1,
  },
});

const wrapped = withMappedNavigationParams()(ImageBrowserScreen);
export { wrapped as ImageBrowserScreen };
