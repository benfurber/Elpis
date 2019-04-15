import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Tabs } from "../tabs";

describe("Post<Tabs>", () => {
  it("renders correctly when displaying the body", () => {
    const onPressComments = jest.fn();
    const onPressPost = jest.fn();
    const display = "body";

    const component = shallow(
      <Tabs
        onPressComments={onPressComments}
        onPressPost={onPressPost}
        display={display}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it("renders correctly when displaying the comments", () => {
    const onPressComments = jest.fn();
    const onPressPost = jest.fn();
    const display = "comments";

    const component = shallow(
      <Tabs
        onPressComments={onPressComments}
        onPressPost={onPressPost}
        display={display}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
