import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { createAppContainer } from "react-navigation";
import { setCustomText } from "react-native-global-props";

import { RootStack } from "routes";
import { elements } from "styles";

import SplashScreen from "react-native-splash-screen";

const AppContainer = createAppContainer(RootStack);

setCustomText({ style: { ...elements.standardText } });

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <AppContainer />;
  }
}

export default App;

AppRegistry.registerComponent("Elpis", () => App);
