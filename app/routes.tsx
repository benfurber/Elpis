import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from "react-navigation";

import { Icon } from "components";
import { FeedScreen, PostScreen, WelcomeScreen } from "screens";

const routeNameIcon = {
  Feed: "newspaper",
};

enum headerMode {
  None = "none",
}

const stackConfig = {
  headerMode: headerMode["None"],
};

const FeedStack = createStackNavigator(
  {
    Feed: FeedScreen,
    Post: PostScreen,
  },
  {
    initialRouteName: "Feed",
    ...stackConfig,
  },
);

const mainTabs = createBottomTabNavigator(
  {
    Feed: FeedStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: (
        <Icon name={routeNameIcon[navigation.state.routeName]} size={35} />
      ),
    }),
    tabBarOptions: {
      showLabel: false,
      style: { borderTopWidth: 0 },
    },
  },
);

const RootStack = createSwitchNavigator({
  Main: mainTabs,
  Welcome: WelcomeScreen,
});

export { RootStack };
