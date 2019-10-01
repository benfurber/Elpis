/* eslint-disable react/display-name */
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
  NotificationsScreen,
  OnboardingAddPasswordScreen,
  OnboardingFeaturesScreen,
  OnboardingThankYouScreen,
  OnboardingWelcomeScreen,
  PostScreen,
  WelcomeScreen,
} from "screens";
import { colours } from "styles";

const routeNameIcon = {
  Feed: "newspaper",
  Feedback: "file-alt",
  Notifications: "bell",
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

const IndividualContentRoutes = {
  Post: PostScreen,
  AddContent: AddContentScreen,
};

const FeedStack = createStackNavigator(
  {
    Feed: FeedScreen,
    ...IndividualContentRoutes,
  },
  {
    initialRouteName: "Feed",
    ...stackConfig,
  },
);

const NotificationsStack = createStackNavigator(
  {
    Notifications: NotificationsScreen,
    ...IndividualContentRoutes,
  },
  {
    initialRouteName: "Notifications",
    ...stackConfig,
  },
);

const mainTabs = createBottomTabNavigator(
  {
    Feed: FeedStack,
    Notifications: NotificationsStack,
    Feedback: FeedbackScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }: { focused: boolean }) => {
        return (
          <Icon
            colour={focused ? colours.darkGrey : colours.mediumGrey}
            name={routeNameIcon[navigation.state.routeName]}
            size={35}
            solid={focused}
          />
        );
      },
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
