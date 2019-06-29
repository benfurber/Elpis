import React, { Component } from "react";

import { WebView } from "react-native-webview";

import { BackgroundContainer } from "components";
import { NavigationType } from "interfaces";
import { Analytics } from "utils";

interface Props {
  navigation: NavigationType;
}

class FeedbackScreen extends Component<Props> {
  componentDidMount() {
    Analytics.track("Feedback");
  }

  render() {
    return (
      <BackgroundContainer>
        <WebView
          source={{
            uri:
              "https://docs.google.com/forms/d/e/1FAIpQLSezsowKLfZuZ3gZdmzo2azQ1Mx7gyrY8X3CLzfHrQhCVipXUQ/viewform?usp=sf_link",
          }}
        />
      </BackgroundContainer>
    );
  }
}

export { FeedbackScreen };
