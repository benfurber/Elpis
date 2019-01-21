import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Logo } from "components";

describe("Logo", () => {
  it("renders correctly", () => {
    const component = shallow(<Logo />);

    expect(component).toMatchSnapshot();
  });
});
