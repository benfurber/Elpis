import { createStackNavigator } from "react-navigation-stack";

import { AddReplyScreen, AddTopicScreen } from "screens";

import { stackConfig } from "./config";

const screen = {
  AddReply: AddReplyScreen,
  AddTopic: AddTopicScreen,
};

const options = {
  ...stackConfig,
};

const AddContent = createStackNavigator(screen, options);

export { AddContent };
