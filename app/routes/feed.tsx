import { createStackNavigator } from "react-navigation-stack";

import { FeedScreen } from "screens";

import { stackConfig } from "./config";
import { IndividualContentRoutes } from "./content";

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

export { FeedStack };
