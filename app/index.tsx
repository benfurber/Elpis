import React from "react";
import { AppRegistry } from "react-native";
import { createAppContainer } from "react-navigation";
import { setCustomText } from "react-native-global-props";

import { RootStack } from "routes";
import { elements } from "styles";

const AppContainer = createAppContainer(RootStack);

setCustomText({ style: { ...elements.standardText } });

const App = () => {
  return <AppContainer />;
};

export default App;

AppRegistry.registerComponent("Elpis", () => App);
