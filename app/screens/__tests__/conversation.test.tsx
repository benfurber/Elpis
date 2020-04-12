import "react-native";
import React from "react";
import { shallow } from "enzyme";
import { MockedProvider } from "@apollo/react-testing";

import { UnwrappedConversationScreen } from "../conversation";
import { conversation, user } from "factories";
import { ConversationScreen } from "screens";

let navigation;

describe("ConversationScreen", () => {
  it("renders correctly for query", () => {
    const component = shallow(
      <MockedProvider>
        <ConversationScreen />
      </MockedProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  it("renders correctly with props", () => {
    const component = shallow(
      <UnwrappedConversationScreen
        currentUserId={user.id}
        id={conversation.id}
        navigation={navigation}
        remainingParticipants={conversation.remainingParticipants}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
