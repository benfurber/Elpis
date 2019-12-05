import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { UnwrappedAddReplyScreen } from "../add-reply";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("AddReplyScreen", () => {
  it("renders correctly", () => {
    const component = shallow(
      <UnwrappedAddReplyScreen navigation={navigation} commentId={"7sdfbu"} />,
    );

    expect(component).toMatchSnapshot();
  });
});
