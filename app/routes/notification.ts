import { createStackNavigator } from "react-navigation-stack";

import { NotificationScreen } from "screens";

import { stackConfig } from "./config";
import { Content } from "./content";

const path = "notification";

const screens = {
  Notification: NotificationScreen,
  ...Content,
};

const options = {
  initialRouteName: "Notification",
  ...stackConfig,
};

const screen = createStackNavigator(screens, options);

const Notification = {
  path,
  screen,
};

export { Notification };
