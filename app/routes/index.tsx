import { createSwitchNavigator } from "react-navigation";

import {
  AuthLoadingScreen as AuthLoading,
  WelcomeScreen as Welcome,
} from "screens";

import { Onboarding } from "./onboarding";
import { Main } from "./main";

const RootStack = createSwitchNavigator({
  AuthLoading,
  Main,
  Onboarding,
  Welcome,
});

export { RootStack };
