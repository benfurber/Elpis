import React from "react";
import { createSwitchNavigator } from "react-navigation";

import { WelcomeScreen } from "screens";

const RootStack = createSwitchNavigator({
  Welcome: WelcomeScreen
});

export { RootStack };
