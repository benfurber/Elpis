import { createStackNavigator } from "react-navigation-stack";

import { FeedScreen } from "screens";

import { stackConfig } from "./config";
import { Content } from "./content";

const options = {
  initialRouteName: "Feed",
  ...stackConfig,
};

const screens = {
  Feed: FeedScreen,
  ...Content,
};

const Feed = createStackNavigator(screens, options);

export { Feed };
