import { createStackNavigator } from "react-navigation-stack";

import { NotificationsScreen } from "screens";

import { stackConfig } from "./config";
import { IndividualContentRoutes } from "./content";

const NotificationStack = createStackNavigator(
  {
    Notifications: NotificationsScreen,
    ...IndividualContentRoutes,
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
