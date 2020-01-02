import { createStackNavigator } from "react-navigation-stack";

import { NotificationsScreen } from "screens";

import { stackConfig } from "./config";
import { Content } from "./content";

const path = "notification";

const screen = {
  Notifications: NotificationsScreen,
  ...Content,
};

const options = {
  initialRouteName: "Notifications",
  ...stackConfig,
};

const notificationScreen = createStackNavigator(screen, options);

const Notification = {
  path,
  screen: notificationScreen,
};

export { Notification };
