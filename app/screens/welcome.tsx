import React from "react";
import { StyleSheet, View } from "react-native";

import { LoginForm, Logo } from "components";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.loginForm}>
        <LoginForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(198, 213, 225, 0.75)",
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
