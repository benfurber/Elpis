import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Comments } from "../comments";

describe("Footer", () => {
  it("renders correctly", () => {
    const component = shallow(<Comments />);

    expect(component).toMatchSnapshot();
  });
});
