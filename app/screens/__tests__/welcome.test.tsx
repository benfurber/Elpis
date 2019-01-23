import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { WelcomeScreen } from "screens";

describe("WelcomeScreen", () => {
  it("renders correctly", () => {
    const component = shallow(<WelcomeScreen />);

    expect(component).toMatchSnapshot();
  });
});
