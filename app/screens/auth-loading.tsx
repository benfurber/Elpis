import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import { BackgroundContainer, Loading } from "components";
import { NavigationType } from "interfaces";
import { USER_DETAILS } from "queries";
import { Analytics, client } from "utils";

interface Props {
  navigation: NavigationType;
}

class AuthLoadingScreen extends Component<Props> {
  async componentDidMount() {
    const { navigate } = this.props.navigation;
    const token = await AsyncStorage.getItem("token");

    if (token === null) {
      return navigate("Login");
    }

    this.callClient();
  }

  async callClient() {
    const { navigate } = this.props.navigation;

    const { data } = await client.query({
      fetchPolicy: "network-only",
      query: USER_DETAILS,
    });
    Analytics.identifyUser(data.me.id);

    return navigate(data.me.onboarded ? "Main" : "Onboarding");
  }

  render() {
    return (
      <BackgroundContainer>
        <View style={styles.container}>
          <Loading />
        </View>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
  },
});

export { AuthLoadingScreen };
