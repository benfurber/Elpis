import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { ConversationScreenHeader } from "components";
import { conversation } from "factories";

let navigation;

describe("ConversationScreenHeader", () => {
  it("renders correctly", () => {
    const component = shallow(
      <ConversationScreenHeader
        remainingParticipants={conversation.remainingParticipants}
        navigation={navigation}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
