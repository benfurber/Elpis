import React from "react";
import { AppRegistry, StyleSheet, View } from "react-native";

import { Logo } from "components";

const App = () => {
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

export default App;

AppRegistry.registerComponent("Elpis", () => App);
