import React, { Component } from "react";

import { BackgroundModal, FormCompleteProfile } from "components";
import { NavigationType } from "interfaces";
import { Analytics } from "utils";

interface Props {
  navigation: NavigationType;
}

interface State {
  password: string;
}

class OnboardingCompleteProfileScreen extends Component<Props, State> {
  componentDidMount() {
    Analytics.trackContent({
      contentType: "Onboarding",
      contentId: "onboarding-2",
    });
  }

  render() {
    const { navigation } = this.props;

    return (
      <BackgroundModal>
        <FormCompleteProfile
          navigation={navigation}
          onPress={() => navigation.navigate("ThankYou")}
        />
      </BackgroundModal>
    );
  }
}

export { OnboardingCompleteProfileScreen };
