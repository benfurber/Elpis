import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { createAppContainer } from "react-navigation";
import { setCustomText } from "react-native-global-props";
import { ApolloProvider } from "@apollo/react-hooks";
import RNBootSplash from "react-native-bootsplash";

import { RootStack } from "routes";
import { elements } from "styles";
import { client, ignoreWarnings, pushNotifications } from "utils";

const AppContainer = createAppContainer(RootStack);
const URI_PREFIX = "elpis://";

setCustomText({ style: { ...elements.standardText } });
ignoreWarnings();

class App extends Component {
  constructor(properties) {
    super(properties);
    pushNotifications.initialise();
  }

  componentDidMount() {
    RNBootSplash.hide({ duration: 250 });
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <AppContainer uriPrefix={URI_PREFIX} />
      </ApolloProvider>
    );
  }
}

export default App;

AppRegistry.registerComponent("Elpis", () => App);
