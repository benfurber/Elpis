import React from "react";
import { StyleSheet, View } from "react-native";

import { Logo } from "components";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export { WelcomeScreen };
