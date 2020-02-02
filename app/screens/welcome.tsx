import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { BackgroundContainer, LoginForm, Logo } from "components";
import { NavigationType } from "interfaces";
import { layout } from "styles";
import { Analytics } from "utils";

interface Props {
  navigation: NavigationType;
}

class WelcomeScreen extends Component<Props> {
  componentDidMount() {
    Analytics.track("Login");
  }

  render() {
    const { navigation } = this.props;

    return (
      <BackgroundContainer>
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
          <View style={styles.logo}>
            <Logo />
          </View>
          <View style={styles.loginForm}>
            <LoginForm navigation={navigation} />
          </View>
        </KeyboardAwareScrollView>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: layout.spacingXL,
  },
  loginForm: {
    alignItems: "center",
    flex: 6,
  },
  logo: {
    alignItems: "stretch",
    flex: 1,
  },
});

export { WelcomeScreen };
