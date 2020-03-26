import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { LoginScreen } from "screens";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("LoginScreen", () => {
  it("renders correctly", () => {
    const component = shallow(<LoginScreen navigation={navigation} />);

    expect(component).toMatchSnapshot();
  });
});
