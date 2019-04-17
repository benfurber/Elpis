import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { LoginForm, Logo } from "components";
import { NavigationType } from "interfaces";
import { colours } from "styles";

interface Props {
  navigation: NavigationType;
}

class WelcomeScreen extends Component<Props> {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.loginForm}>
          <LoginForm navigation={navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.transparentBlue,
    flex: 1,
    flexDirection: "column"
  },
  loginForm: {
    flex: 6,
    alignItems: "center"
  },
  logo: {
    flex: 1,
    alignItems: "stretch"
  }
});

export { WelcomeScreen };
