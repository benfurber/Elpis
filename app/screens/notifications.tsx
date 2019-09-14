import React, { Component } from "react";

import { WebView } from "react-native-webview";

import { BackgroundContainer } from "components";
import { NavigationType } from "interfaces";
import { Analytics } from "utils";

interface Props {
  navigation: NavigationType;
}

class NotificationsScreen extends Component<Props> {
  componentDidMount() {
    Analytics.track("Notifications");
  }

  render() {
    return (
      <BackgroundContainer>
      </BackgroundContainer>
    );
  }
}

export { NotificationsScreen };
