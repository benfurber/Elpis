import { createStackNavigator } from "react-navigation-stack";

import {
  OnboardingAddPasswordScreen,
  OnboardingFeaturesScreen,
  OnboardingThankYouScreen,
  OnboardingWelcomeScreen,
} from "screens";

import { stackConfig } from "./utils";

const Onboarding = createStackNavigator(
  {
    AddPassword: OnboardingAddPasswordScreen,
    Features: OnboardingFeaturesScreen,
    ThankYou: OnboardingThankYouScreen,
    Welcome: OnboardingWelcomeScreen,
  },
  {
    initialRouteName: "Welcome",
    ...stackConfig,
  },
);

export { Onboarding };
