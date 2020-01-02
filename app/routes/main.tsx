/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable react/display-name */

import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { TabBarIcon } from "components";
import { FeedbackScreen, SettingsScreen } from "screens";

import { FeedStack as Feed } from "./feed";
import { Notification } from "./notification";

const mainTabOptions = {
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

const mainTabs = createBottomTabNavigator(
  {
    Feed,
    Feedback: FeedbackScreen,
    Notification,
    Settings: SettingsScreen,
  },
  mainTabOptions,
);

const Main = {
  path: "",
  screen: mainTabs,
};

export { Main };
