import { createStackNavigator } from "react-navigation-stack";

import { AddReplyScreen, AddTopicScreen, ImageBrowserScreen } from "screens";

import { stackConfig } from "./config";

const screens = {
  AddReply: AddReplyScreen,
  AddTopic: AddTopicScreen,
  ImageBrowser: ImageBrowserScreen,
};

const options = {
  ...stackConfig,
};

const AddContent = createStackNavigator(screens, options);

export { AddContent };
