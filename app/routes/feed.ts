import { createStackNavigator } from "react-navigation-stack";

import { FeedScreen } from "screens";

import { stackConfig } from "./config";
import { Content } from "./content";

const options = {
  initialRouteName: "Feed",
  ...stackConfig,
};

const screen = {
  Feed: FeedScreen,
  ...Content,
};

const Feed = createStackNavigator(screen, options);

export { Feed };
