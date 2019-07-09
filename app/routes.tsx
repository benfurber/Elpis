import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from "react-navigation";

import { Icon } from "components";
import {
  FeedScreen,
  FeedbackScreen,
  ImageBrowserScreen,
  OnboardingCompleteProfileScreen,
  OnboardingThankYouScreen,
  OnboardingWelcomeScreen,
  PostScreen,
  WelcomeScreen,
} from "screens";

const routeNameIcon = {
  Feed: "newspaper",
  Feedback: "wpforms",
};

enum headerMode {
  None = "none",
}

const stackConfig = {
  headerMode: headerMode["None"],
};

const FeedStack = createStackNavigator(
  {
    Feed: FeedScreen,
    Post: PostScreen,
  },
  {
    initialRouteName: "Feed",
    ...stackConfig,
  },
);

const mainTabs = createBottomTabNavigator(
  {
    Feed: FeedStack,
    Feedback: FeedbackScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: (
        <Icon name={routeNameIcon[navigation.state.routeName]} size={35} />
      ),
    }),
    tabBarOptions: {
      keyboardHidesTabBar: true,
      showLabel: false,
      style: { borderTopWidth: 0 },
    },
  },
);

const ModalsStack = createStackNavigator(
  {
    ImageBrowser: ImageBrowserScreen,
  },
  {
    mode: "modal",
  },
);

const OnboardingSwitch = createStackNavigator(
  {
    Welcome: OnboardingWelcomeScreen,
    CompleteProfile: OnboardingCompleteProfileScreen,
    ThankYou: OnboardingThankYouScreen,
    Modals: ModalsStack,
  },
  {
    ...stackConfig,
  },
);

const RootStack = createSwitchNavigator({
  Onboarding: OnboardingSwitch,
  Main: mainTabs,
  Welcome: WelcomeScreen,
});

export { RootStack };
