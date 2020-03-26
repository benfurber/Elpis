import { createSwitchNavigator } from "react-navigation";

import { Authentication } from "./authentication";
import { Onboarding } from "./onboarding";
import { Main } from "./main";

const screens = {
  Authentication,
  Main,
  Onboarding,
};

const options = {
  initialRouteName: "Authentication",
};

const Root = createSwitchNavigator(screens, options);

export { Root };
