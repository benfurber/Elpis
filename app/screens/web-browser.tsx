import React, { Component } from "react";

import { WebView } from "react-native-webview";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { BackgroundContainer } from "components";
import { NavigationType } from "interfaces";
import { Analytics } from "utils";

interface Props {
  navigation: NavigationType;
  uri: string;
}

class WebBrowserScreen extends Component<Props> {
  componentDidMount() {
    Analytics.trackContent({
      contentType: "WebBrowser",
      contentId: this.props.uri,
    });
  }

  render() {
    const { uri } = this.props;

    return (
      <BackgroundContainer>
        <WebView source={{ uri }} />
      </BackgroundContainer>
    );
  }
}
const wrappedWebBrowserScreen = withMappedNavigationParams()(WebBrowserScreen);
export {
  wrappedWebBrowserScreen as WebBrowserScreen,
  WebBrowserScreen as UnwrappedWebBrowserScreen,
};
