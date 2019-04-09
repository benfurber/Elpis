import { createStackNavigator, createSwitchNavigator } from "react-navigation";

import { FeedScreen, PostScreen, WelcomeScreen } from "screens";

enum headerMode {
  None = "none"
}

const stackConfig = {
  headerMode: headerMode["None"]
};

const FeedStack = createStackNavigator(
  {
    Feed: FeedScreen,
    Post: PostScreen
  },
  {
    initialRouteName: "Feed",
    ...stackConfig
  }
);

const RootStack = createSwitchNavigator({
  Feed: FeedStack,
  Welcome: WelcomeScreen
});

export { RootStack };
