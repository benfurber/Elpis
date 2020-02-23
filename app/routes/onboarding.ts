import { createStackNavigator } from "react-navigation-stack";

import {
  OnboardingAddPasswordScreen,
  OnboardingFeaturesScreen,
  OnboardingFinalScreen,
  OnboardingWelcomeScreen,
} from "screens";

import { stackConfig } from "./config";

const screens = {
  AddPassword: OnboardingAddPasswordScreen,
  Features: OnboardingFeaturesScreen,
  Final: OnboardingFinalScreen,
  Welcome: OnboardingWelcomeScreen,
};

const options = {
  initialRouteName: "Welcome",
  ...stackConfig,
};

const Onboarding = createStackNavigator(screens, options);

export { Onboarding };
