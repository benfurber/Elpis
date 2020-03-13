import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { BackButton, BackgroundContainer, Title } from "components";
import { NavigationType } from "interfaces";
import { colours, layout } from "styles";

interface Props {
  backToText?: string;
  content: () => JSX.Element | Component;
  navigation: NavigationType;
  title?: string;
}

class StaticContentScreen extends Component<Props> {
  render() {
    const { backToText, content, navigation, title } = this.props;

    return (
      <BackgroundContainer>
        {backToText && <BackButton navigation={navigation} text={backToText} />}
        <ScrollView style={styles.scrollView}>
          {title && <Title text={title} />}
          <View style={styles.body}>{content}</View>
        </ScrollView>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
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
