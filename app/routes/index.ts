import { createSwitchNavigator } from "react-navigation";

import {
  AuthLoadingScreen as AuthLoading,
  WelcomeScreen as Welcome,
} from "screens";

import { Onboarding } from "./onboarding";
import { Main } from "./main";

const screens = {
  AuthLoading,
  Main,
  Onboarding,
  Welcome,
};

const options = {
  initialRouteName: "AuthLoading",
};

const Root = createSwitchNavigator(screens, options);

export { Root };
