import { createStackNavigator } from "react-navigation-stack";

import {
  OnboardingAddPasswordScreen,
  OnboardingFeaturesScreen,
  OnboardingThankYouScreen,
  OnboardingWelcomeScreen,
} from "screens";

import { stackConfig } from "./config";

const screens = {
  AddPassword: OnboardingAddPasswordScreen,
  Features: OnboardingFeaturesScreen,
  ThankYou: OnboardingThankYouScreen,
  Welcome: OnboardingWelcomeScreen,
};

const options = {
  initialRouteName: "Welcome",
  ...stackConfig,
};

const Onboarding = createStackNavigator(screens, options);

export { Onboarding };
