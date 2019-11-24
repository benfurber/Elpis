import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { createAppContainer } from "react-navigation";
import { setCustomText } from "react-native-global-props";
import OneSignal from "react-native-onesignal";
import { ApolloProvider } from "@apollo/react-hooks";
import RNBootSplash from "react-native-bootsplash";

import { ONE_SIGNAL_ID } from "react-native-dotenv";

import { RootStack } from "routes";
import { elements } from "styles";
import { client } from "utils";

const AppContainer = createAppContainer(RootStack);

setCustomText({ style: { ...elements.standardText } });

const URI_PREFIX = "elpis://";

class App extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init(ONE_SIGNAL_ID, { kOSSettingsKeyAutoPrompt: false });

    OneSignal.addEventListener("received", this.onReceived);
    OneSignal.addEventListener("opened", this.onOpened);
    OneSignal.addEventListener("ids", this.onIds);
  }

  componentDidMount() {
    RNBootSplash.hide({ duration: 250 });
  }

  componentWillUnmount() {
    OneSignal.removeEventListener("received", this.onReceived);
    OneSignal.removeEventListener("opened", this.onOpened);
    OneSignal.removeEventListener("ids", this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log("Message: ", openResult.notification.payload.body);
    console.log("Data: ", openResult.notification.payload.additionalData);
    console.log("isActive: ", openResult.notification.isAppInFocus);
    console.log("openResult: ", openResult);
  }

  onIds(device) {
    console.log("Device info: ", device);
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
