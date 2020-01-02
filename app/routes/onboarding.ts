import { createStackNavigator } from "react-navigation-stack";

import {
  OnboardingAddPasswordScreen,
  OnboardingFeaturesScreen,
  OnboardingThankYouScreen,
  OnboardingWelcomeScreen,
} from "screens";

import { stackConfig } from "./config";

const screen = {
  AddPassword: OnboardingAddPasswordScreen,
  Features: OnboardingFeaturesScreen,
  ThankYou: OnboardingThankYouScreen,
  Welcome: OnboardingWelcomeScreen,
};

const options = {
  initialRouteName: "Welcome",
  ...stackConfig,
};

const Onboarding = createStackNavigator(screen, options);

export { Onboarding };
