import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from "react-navigation";

import { Icon } from "components";
import {
  AuthLoadingScreen,
  FeedScreen,
  FeedbackScreen,
  ImageBrowserScreen,
  OnboardingAddPasswordScreen,
  OnboardingThankYouScreen,
  OnboardingWelcomeScreen,
  PostScreen,
  WelcomeScreen,
} from "screens";

const routeNameIcon = {
  Feed: "newspaper",
  Feedback: "file-alt",
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
    AddPassword: OnboardingAddPasswordScreen,
    ThankYou: OnboardingThankYouScreen,
    Modals: ModalsStack,
  },
  {
    ...stackConfig,
  },
);

const RootStack = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Welcome: WelcomeScreen,
  Onboarding: OnboardingSwitch,
  Main: mainTabs,
});

export { RootStack };
