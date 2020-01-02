import { createStackNavigator } from "react-navigation-stack";

import { NotificationsScreen } from "screens";

import { stackConfig } from "./config";
import { Content } from "./content";

const NotificationStack = createStackNavigator(
  {
    Notifications: NotificationsScreen,
    ...Content,
  },
  {
    initialRouteName: "Notifications",
    ...stackConfig,
  },
);

const Notification = {
  path: "notification",
  screen: NotificationStack,
};

export { Notification };
