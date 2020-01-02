import { createStackNavigator } from "react-navigation-stack";

import { NotificationScreen } from "screens";

import { stackConfig } from "./config";
import { Content } from "./content";

const path = "notification";

const screen = {
  Notification: NotificationScreen,
  ...Content,
};

const options = {
  initialRouteName: "Notification",
  ...stackConfig,
};

const notificationScreen = createStackNavigator(screen, options);

const Notification = {
  path,
  screen: notificationScreen,
};

export { Notification };
