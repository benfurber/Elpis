import { createSwitchNavigator } from "react-navigation";

import {
  AuthLoadingScreen as AuthLoading,
  WelcomeScreen as Welcome,
} from "screens";

import { Onboarding } from "./onboarding";
import { Main } from "./main";

const Root = createSwitchNavigator(
  {
    AuthLoading,
    Main,
    Onboarding,
    Welcome,
  },
  {
    initialRouteName: "AuthLoading",
  },
);

export { Root };
