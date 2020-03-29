import { createSwitchNavigator } from "react-navigation";

import {
  AuthLoadingScreen as AuthLoading,
  LoginScreen as Login,
  RequestNewPasswordScreen as RequestNewPassword,
  ResetPasswordScreen,
} from "screens";

import { stackConfig } from "./config";

const options = {
  initialRouteName: "AuthLoading",
  ...stackConfig,
};

const ResetPassword = {
  path: "reset-password",
  screen: ResetPasswordScreen,
};

const screens = {
  AuthLoading,
  Login,
  RequestNewPassword,
  ResetPassword,
};

const screen = createSwitchNavigator(screens, options);

const Authentication = {
  path: "",
  screen,
};

export { Authentication };
