/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable react/display-name */
import React from "react";
import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { TabBarIcon } from "components";
import {
  AddReplyScreen,
  AddTopicScreen,
  AuthLoadingScreen,
  FeedScreen,
  FeedbackScreen,
  NotificationsScreen,
  OnboardingAddPasswordScreen,
  OnboardingFeaturesScreen,
  OnboardingThankYouScreen,
  OnboardingWelcomeScreen,
  PostScreen,
  SettingsScreen,
  WelcomeScreen,
} from "screens";

enum headerMode {
  None = "none",
}

const stackConfig = {
  headerMode: headerMode["None"],
};

const AddContentScreen = createStackNavigator(
  {
    AddReply: AddReplyScreen,
    AddTopic: AddTopicScreen,
  },
  {
    mode: "modal",
    ...stackConfig,
  },
);

const IndividualContentRoutes = {
  Post: {
    screen: PostScreen,
    path: "post/:id",
  },
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
    Notifications: {
      screen: NotificationsStack,
      path: "notification",
    },
    Feedback: FeedbackScreen,
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }: { focused: boolean }) => {
        return (
          <TabBarIcon
            routeName={navigation.state.routeName}
            focused={focused}
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

const SettingsSwitch = createStackNavigator({
  Logout: LogoutScreen,
});

const RootStack = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Welcome: WelcomeScreen,
  Onboarding: OnboardingSwitch,
  Main: {
    screen: mainTabs,
    path: "",
  },
  Settings: SettingsSwitch,
});

export { RootStack };
