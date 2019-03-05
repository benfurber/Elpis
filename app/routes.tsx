import React from "react";
import { createSwitchNavigator } from "react-navigation";

import { WelcomeScreen, FeedScreen } from "screens";

const RootStack = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Feed: FeedScreen
});

export { RootStack };
