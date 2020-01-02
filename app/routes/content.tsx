import { createStackNavigator } from "react-navigation-stack";

import { AddReplyScreen, AddTopicScreen, PostScreen } from "screens";

import { stackConfig } from "./config";

const AddContent = createStackNavigator(
  {
    AddReply: AddReplyScreen,
    AddTopic: AddTopicScreen,
  },
  {
    mode: "modal",
    ...stackConfig,
  },
);

const Content = {
  AddContent,
  Post: {
    path: "post/:id",
    screen: PostScreen,
  },
};

export { Content };
