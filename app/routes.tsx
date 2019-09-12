import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from "react-navigation";

import { Icon } from "components";
import {
  AddReplyScreen,
  AuthLoadingScreen,
  FeedScreen,
  FeedbackScreen,
  OnboardingAddPasswordScreen,
  OnboardingFeaturesScreen,
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

const AddContentScreen = createStackNavigator(
  {
    AddReply: AddReplyScreen,
  },
  {
    mode: "modal",
    headerMode: "none",
  },
);

const FeedStack = createStackNavigator(
  {
    Feed: FeedScreen,
    Post: PostScreen,
    AddContent: AddContentScreen,
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

const OnboardingSwitch = createStackNavigator(
  {
    Welcome: OnboardingWelcomeScreen,
    Features: OnboardingFeaturesScreen,
    AddPassword: OnboardingAddPasswordScreen,
    ThankYou: OnboardingThankYouScreen,
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
