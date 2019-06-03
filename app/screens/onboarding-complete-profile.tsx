import React, { Component } from "react";

import { BackgroundModal, FormCompleteProfile } from "components";
import { NavigationType } from "interfaces";

interface Props {
  navigation: NavigationType;
}

interface State {
  password: string;
}

class OnboardingCompleteProfileScreen extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return (
      <BackgroundModal>
        <FormCompleteProfile onPress={() => navigation.navigate("ThankYou")} />
      </BackgroundModal>
    );
  }
}

export { OnboardingCompleteProfileScreen };
