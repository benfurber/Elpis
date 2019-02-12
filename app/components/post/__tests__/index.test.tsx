import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Post } from "components";

describe("Post", () => {
  it("renders correctly", () => {
    const component = shallow(<Post description="A string" />);

    expect(component).toMatchSnapshot();
  });
});
