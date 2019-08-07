import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { BackgroundContainer, Loading } from "components";
import { NavigationType } from "interfaces";

interface Props {
  navigation: NavigationType;
}

class AuthLoadingScreen extends Component<Props> {
  componentDidMount() {
    this.loginUser();
  }

  loginUser = async () => {
    const { navigation } = this.props;
    const token = await AsyncStorage.getItem("token");

    navigation.navigate(token ? "Onboarding" : "Welcome");
  };

  render() {
    return (
      <BackgroundContainer>
        <Loading />
      </BackgroundContainer>
    );
  }
}

export { AuthLoadingScreen };
