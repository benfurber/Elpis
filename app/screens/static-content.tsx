import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { BackgroundContainer, Icon } from "components";
import { NavigationType } from "interfaces";
import { colours, layout } from "styles";

interface Props {
  backToText?: string;
  content: Component;
  navigation: NavigationType;
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
    const { content } = this.props;

    return (
      <BackgroundContainer>
        {this.backButton()}
        <ScrollView style={styles.scrollView}>
          <View style={styles.body}>{content}</View>
        </ScrollView>
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
    width: "100%",
  },
  icon: {
    paddingRight: layout.spacingS,
  },
  scrollView: {
    backgroundColor: colours.whiteTransparent,
    borderTopLeftRadius: layout.borderRadiusL,
    borderTopRightRadius: layout.borderRadiusL,
    height: "100%",
    padding: layout.spacingL,
  },
});

const wrappedStaticContentScreen = withMappedNavigationParams()(
  StaticContentScreen,
);
export {
  wrappedStaticContentScreen as StaticContentScreen,
  StaticContentScreen as UnwrappedStaticContentScreen,
};
