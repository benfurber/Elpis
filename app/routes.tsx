import { createStackNavigator, createSwitchNavigator } from "react-navigation";

import { FeedScreen, PostScreen, WelcomeScreen } from "screens";

enum headerMode {
  None = "none"
}

const stackConfig = {
  headerMode: headerMode["None"],
  initialRouteName: "Feed"
};

const FeedStack = createStackNavigator(
  {
    Feed: FeedScreen,
    Post: PostScreen
  },
  stackConfig
);

const RootStack = createSwitchNavigator({
  Feed: FeedStack,
  Welcome: WelcomeScreen
});

export { RootStack };
