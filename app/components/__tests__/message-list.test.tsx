import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { MessageList } from "components";
import { conversation } from "factories";

let navigation;

describe("Message", () => {
  it("renders correctly", () => {
    const currentUserId = "126g";

    const component = shallow(
      <MessageList
        conversation={conversation}
        currentUserId={currentUserId}
        navigation={navigation}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
