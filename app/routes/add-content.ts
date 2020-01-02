import { createStackNavigator } from "react-navigation-stack";

import { AddReplyScreen, AddTopicScreen } from "screens";

import { stackConfig } from "./config";

const screens = {
  AddReply: AddReplyScreen,
  AddTopic: AddTopicScreen,
};

const options = {
  ...stackConfig,
};

const AddContent = createStackNavigator(screens, options);

export { AddContent };
