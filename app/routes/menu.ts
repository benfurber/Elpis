import { createStackNavigator } from "react-navigation-stack";

import { MenuScreen, StaticContentScreen } from "screens";

import { stackConfig } from "./config";

const options = {
  initialRouteName: "Menu",
  ...stackConfig,
};

const screens = {
  CommunityRules: StaticContentScreen,
  HowTo: StaticContentScreen,
  Menu: MenuScreen,
};

const Menu = createStackNavigator(screens, options);

export { Menu };
