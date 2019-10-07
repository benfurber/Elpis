import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { UnwrappedAddReplyScreen } from "../add-reply";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("AddReplyScreen", () => {
  it("renders correctly when for adding a comment", () => {
    const component = shallow(
      <UnwrappedAddReplyScreen
        navigation={navigation}
        postId={"2332r"}
        commentId={null}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it("renders correctly when for adding a reply", () => {
    const component = shallow(
      <UnwrappedAddReplyScreen
        navigation={navigation}
        postId={"2332r"}
        commentId={"7sdfbu"}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
