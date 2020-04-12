import { createStackNavigator } from "react-navigation-stack";

import { ConversationFeedScreen, ConversationScreen } from "screens";

import { stackConfig } from "./config";

const path = "conversation";

const screens = {
  Conversation: ConversationScreen,
  ConversationFeed: ConversationFeedScreen,
};

const options = {
  initialRouteName: "ConversationFeed",
  ...stackConfig,
};

const screen = createStackNavigator(screens, options);

const Conversation = {
  path,
  screen,
};

export { Conversation };
