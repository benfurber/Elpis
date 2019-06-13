import React from "react";
import { AppRegistry } from "react-native";
import { createAppContainer } from "react-navigation";
import { setCustomText } from "react-native-global-props";
import { ApolloProvider } from "react-apollo";

import { RootStack } from "routes";
import { elements } from "styles";
import { client } from "utils";

const AppContainer = createAppContainer(RootStack);

setCustomText({ style: { ...elements.standardText } });

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppContainer />
    </ApolloProvider>
  );
};

export default App;

AppRegistry.registerComponent("Elpis", () => App);
