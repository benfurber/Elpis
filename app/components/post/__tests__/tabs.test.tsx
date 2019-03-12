import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Tabs } from "../tabs";

describe("Tabs", () => {
  it("renders correctly", () => {
    const onPressComments = jest.fn();
    const onPressPost = jest.fn();

    const component = shallow(
      <Tabs onPressComments={onPressComments} onPressPost={onPressPost} />
    );

    expect(component).toMatchSnapshot();
  });
});
