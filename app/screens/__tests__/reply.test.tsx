import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { reply } from "factories";

import { UnwrappedReplyScreen } from "../reply";

let navigation;

describe("ReplyScreen", () => {
  it("renders correctly", () => {
    const component = shallow(
      <UnwrappedReplyScreen navigation={navigation} id={reply.id} />,
    );

    expect(component).toMatchSnapshot();
  });
});
