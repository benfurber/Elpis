import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { withApollo, WithApolloClient } from "react-apollo";

import { BackgroundContainer, Loading } from "components";
import { NavigationType } from "interfaces";
import { USER_DETAILS } from "queries";

interface Props {
  client: WithApolloClient<any>;
  navigation: NavigationType;
}

class AuthLoadingScreen extends Component<Props> {
  componentDidMount() {
    this.loginUser();
  }

  loginUser = async () => {
    const { client, navigation } = this.props;
    const token = await AsyncStorage.getItem("token");

    if (!token) {
      navigation.navigate("Welcome");
    }

    const result = await client.query({ query: USER_DETAILS });
    const { onboarded } = result.data.me;

    navigation.navigate(onboarded ? "Main" : "Onboarding");
  };

  render() {
    return (
      <BackgroundContainer>
        <Loading />
      </BackgroundContainer>
    );
  }
}
const Connected = withApollo(AuthLoadingScreen);
export { Connected as AuthLoadingScreen };
