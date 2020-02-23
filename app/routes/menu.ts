import { createStackNavigator } from "react-navigation-stack";

import {
  EditProfileScreen,
  ImageBrowserScreen,
  MenuScreen,
  StaticContentScreen,
} from "screens";

import { stackConfig } from "./config";

const options = {
  initialRouteName: "Menu",
  ...stackConfig,
};

const screens = {
  CommunityRules: StaticContentScreen,
  EditProfile: EditProfileScreen,
  HowTo: StaticContentScreen,
  ImageBrowser: ImageBrowserScreen,
  Menu: MenuScreen,
};

const Menu = createStackNavigator(screens, options);

export { Menu };
