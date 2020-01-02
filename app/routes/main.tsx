/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable react/display-name */

import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { TabBarIcon } from "components";
import { FeedbackScreen, SettingsScreen } from "screens";

import { Feed } from "./feed";
import { Notification } from "./notification";

const options = {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused }: { focused: boolean }) => {
      return (
        <TabBarIcon routeName={navigation.state.routeName} focused={focused} />
      );
    },
  }),
  tabBarOptions: {
    keyboardHidesTabBar: true,
    showLabel: false,
    style: { borderTopWidth: 0 },
  },
};

const screen = createBottomTabNavigator(
  {
    Feed,
    Feedback: FeedbackScreen,
    Notification,
    Settings: SettingsScreen,
  },
  options,
);

const Main = {
  path: "",
  screen,
};

export { Main };
