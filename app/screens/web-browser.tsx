import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { BackgroundContainer, Icon, WebView } from "components";
import { NavigationType } from "interfaces";
import { layout, colours } from "styles";
import { Analytics } from "utils";

interface Props {
  navigation: NavigationType;
  uri: string;
}

class WebBrowserScreen extends Component<Props> {
  componentDidMount() {
    Analytics.trackContent({
      contentType: "WebBrowser",
      contentId: "",
    });
  }

  render() {
    const { navigation, uri } = this.props;

    return (
      <BackgroundContainer>
        <View>
          <View style={styles.closeContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="times-circle" size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <WebView uri={uri} />
        </View>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: colours.whiteTransparent,
    borderTopLeftRadius: layout.borderRadiusL,
    borderTopRightRadius: layout.borderRadiusL,
    flex: 1,
  },
  closeContainer: {
    flexDirection: "row-reverse",
    padding: layout.spacing,
  },
  ctaText: {
    paddingHorizontal: layout.spacing,
  },
  row: {
    alignItems: "baseline",
    flexDirection: "row",
  },
});

const wrappedWebBrowserScreen = withMappedNavigationParams()(WebBrowserScreen);
export {
  wrappedWebBrowserScreen as WebBrowserScreen,
  WebBrowserScreen as UnwrappedWebBrowserScreen,
};
