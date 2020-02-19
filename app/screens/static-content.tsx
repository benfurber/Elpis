import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { BackgroundContainer, Icon, Title } from "components";
import { NavigationType } from "interfaces";
import { colours, layout } from "styles";

interface Props {
  backToText?: string;
  navigation: NavigationType;
  title?: string;
}

class StaticContentScreen extends Component<Props> {
  backButton() {
    const { backToText, navigation } = this.props;

    if (backToText) {
      return (
        <TouchableOpacity style={styles.back} onPress={() => navigation.pop()}>
          <Icon name="angle-double-left" style={styles.icon} />
          <Text>{backToText}</Text>
        </TouchableOpacity>
      );
    }
  }

  render() {
    const { title } = this.props;

    return (
      <BackgroundContainer>
        {this.backButton()}
        <View style={styles.body}>{title && <Title text={title} />}</View>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    flexDirection: "row",
    paddingBottom: layout.spacing,
    paddingHorizontal: layout.spacing,
  },
  body: {
    backgroundColor: colours.whiteTransparent,
    borderTopRightRadius: layout.borderRadius,
    padding: layout.spacing,
    width: "100%",
  },
  icon: {
    paddingRight: layout.spacingS,
  },
});

const wrappedStaticContentScreen = withMappedNavigationParams()(
  StaticContentScreen,
);
export {
  wrappedStaticContentScreen as StaticContentScreen,
  StaticContentScreen as UnwrappedStaticContentScreen,
};
