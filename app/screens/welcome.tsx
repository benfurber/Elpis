import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { BackgroundContainer, LoginForm, Logo } from "components";
import { NavigationType } from "interfaces";

interface Props {
  navigation: NavigationType;
}

class WelcomeScreen extends Component<Props> {
  render() {
    const { navigation } = this.props;

    return (
      <BackgroundContainer>
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.loginForm}>
          <LoginForm navigation={navigation} />
        </View>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  loginForm: {
    flex: 6,
    alignItems: "center",
  },
  logo: {
    flex: 1,
    alignItems: "stretch",
  },
});

export { WelcomeScreen };
