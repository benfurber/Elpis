import { createStackNavigator } from "react-navigation-stack";

import { FeedScreen } from "screens";

import { stackConfig } from "./config";
import { Content } from "./content";

const Feed = createStackNavigator(
  {
    Feed: FeedScreen,
    ...Content,
  },
  {
    initialRouteName: "Feed",
    ...stackConfig,
  },
);

export { Feed };
