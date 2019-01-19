import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Logo } from "../logo";

describe("Logo", () => {
  it("renders correctly", () => {
    const component = shallow(<Logo />);

    expect(component).toMatchSnapshot();
  });
});
