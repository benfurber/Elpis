import React, { Component } from "react";
import { WebView as WebViewPackage } from "react-native-webview";

interface Props {
  uri: string;
}

class WebView extends Component<Props> {
  render() {
    const { uri } = this.props;

    return (
      <WebViewPackage
        source={{ uri }}
        containerStyle={{ flex: 0, height: "100%" }}
      />
    );
  }
}

export { WebView };
