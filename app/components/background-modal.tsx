import React, { Component } from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";

import { BackgroundContainer } from "components";
import { colours, layout } from "styles";

const handImagePath = "../assets/images/hand.png";

interface Props {
  children: object;
}

class BackgroundModal extends Component<Props> {
  render() {
    return (
      <BackgroundContainer>
        <ImageBackground
          imageStyle={styles.imageHand}
          source={require(handImagePath)}
          style={styles.containerHand}
        >
          <ScrollView style={styles.container}>
            {this.props.children}
          </ScrollView>
        </ImageBackground>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.whiteTransparentHigh,
    borderTopLeftRadius: layout.borderRadiusL,
    borderTopRightRadius: layout.borderRadiusL,
    width: "100%",
    height: "100%",
    marginTop: layout.spacingL,
  },
  containerHand: {
    width: "100%",
    height: "100%",
    flexDirection: "column-reverse",
    alignItems: "flex-end",
  },
  imageHand: {
    flex: 1,
    width: 360,
    height: 360,
    bottom: 0,
    left: -10,
    opacity: 0.2,
  },
});

export { BackgroundModal };
