import { createSwitchNavigator } from "react-navigation";

import {
  AuthLoadingScreen as AuthLoading,
  LoginScreen as Login,
  RequestNewPasswordScreen as RequestNewPassword,
} from "screens";

import { stackConfig } from "./config";

const options = {
  initialRouteName: "AuthLoading",
  ...stackConfig,
};

const screens = {
  AuthLoading,
  Login,
  RequestNewPassword,
};

const Authentication = createSwitchNavigator(screens, options);

export { Authentication };
