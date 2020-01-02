import { createStackNavigator } from "react-navigation-stack";

import { AddReplyScreen, AddTopicScreen, PostScreen } from "screens";

import { stackConfig } from "./config";

const AddContentScreen = createStackNavigator(
  {
    AddReply: AddReplyScreen,
    AddTopic: AddTopicScreen,
  },
  {
    mode: "modal",
    ...stackConfig,
  },
);

const IndividualContentRoutes = {
  AddContent: AddContentScreen,
  Post: {
    path: "post/:id",
    screen: PostScreen,
  },
};

export { IndividualContentRoutes };
