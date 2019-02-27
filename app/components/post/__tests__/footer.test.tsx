import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Footer } from "../footer";

describe("Footer", () => {
  it("renders correctly", () => {
    const component = shallow(<Footer />);

    expect(component).toMatchSnapshot();
  });
});
