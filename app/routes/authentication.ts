import { createSwitchNavigator } from "react-navigation";

import {
  AuthLoadingScreen as AuthLoading,
  WelcomeScreen as Welcome,
} from "screens";

import { stackConfig } from "./config";

const options = {
  initialRouteName: "AuthLoading",
  ...stackConfig,
};

const screens = {
  AuthLoading,
  Welcome,
};

const Authentication = createSwitchNavigator(screens, options);

export { Authentication };
