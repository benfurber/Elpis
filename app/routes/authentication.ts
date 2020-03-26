import { createSwitchNavigator } from "react-navigation";

import {
  AuthLoadingScreen as AuthLoading,
  LoginScreen as Login,
} from "screens";

import { stackConfig } from "./config";

const options = {
  initialRouteName: "AuthLoading",
  ...stackConfig,
};

const screens = {
  AuthLoading,
  Login,
};

const Authentication = createSwitchNavigator(screens, options);

export { Authentication };
