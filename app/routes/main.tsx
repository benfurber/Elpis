/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable react/display-name */

import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { TabBarIcon } from "components";
import {
  AddReplyScreen,
  AddTopicScreen,
  FeedScreen,
  FeedbackScreen,
  NotificationsScreen,
  PostScreen,
  SettingsScreen,
} from "screens";

import { stackConfig } from "./utils";

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
  AddContent: AddContentScreen,
  Post: {
    path: "post/:id",
    screen: PostScreen,
  },
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
    Feedback: FeedbackScreen,
    Notifications: {
      path: "notification",
      screen: NotificationsStack,
    },
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

const Main = {
  path: "",
  screen: mainTabs,
};

export { Main };
