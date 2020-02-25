import React, { Component } from "react";
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { BackgroundContainer, Icon, ThumbnailImageBrowser } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { colours, layout } from "styles";

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

  renderImage(image, index) {
    const selected = index === this.state.index;
    const { width } = Dimensions.get("window");

    return (
      <ThumbnailImageBrowser
        image={image}
        imageIndex={index}
        selected={selected}
        setIndexCallback={index => this.setIndex(index)}
        width={width}
      />
    );
  }

  renderImageLoop() {
    const { images } = this.props;

    return images.map((image, index) => this.renderImage(image, index));
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
});

const wrapped = withMappedNavigationParams()(ImageBrowserScreen);
export { wrapped as ImageBrowserScreen };
