import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Comments } from "../comments";

describe("Comments", () => {
  it("renders correctly", () => {
    const component = shallow(<Comments description={"A simple string"} />);

    expect(component).toMatchSnapshot();
  });
});
