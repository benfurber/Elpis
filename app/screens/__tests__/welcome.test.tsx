import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { WelcomeScreen } from "screens";

const navigation = { navigate: jest.fn() };

describe("WelcomeScreen", () => {
  it("renders correctly", () => {
    const component = shallow(<WelcomeScreen navigation={navigation} />);

    expect(component).toMatchSnapshot();
  });
});
