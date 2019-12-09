import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { UnwrappedAddTopicScreen } from "../add-topic";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("AddReplyScreen", () => {
  it("renders correctly", () => {
    const component = shallow(
      <UnwrappedAddTopicScreen navigation={navigation} postId={"2332r"} />,
    );

    expect(component).toMatchSnapshot();
  });
});
