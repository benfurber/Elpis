/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable react/display-name */

import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { TabBarIcon } from "components";
import {
  FeedbackScreen as Feedback,
  SettingsScreen as Settings,
} from "screens";

import { Feed } from "./feed";
import { Notification } from "./notification";

const path = "";

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

const screens = {
  Feed,
  Notification,
  Feedback,
  Settings,
};

const screen = createBottomTabNavigator(screens, options);

const Main = {
  path,
  screen,
};

export { Main };
