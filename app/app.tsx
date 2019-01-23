import React from "react";
import { AppRegistry, StyleSheet, View } from "react-native";
import { createAppContainer } from "react-navigation";

import { RootStack } from "routes";

const AppContainer = createAppContainer(RootStack);

const App = () => {
  return <AppContainer />;
};

export default App;

AppRegistry.registerComponent("Elpis", () => App);
