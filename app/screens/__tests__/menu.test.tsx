import "react-native";
import React from "react";
import { shallow } from "enzyme";
import { MenuScreen } from "screens";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("MenuScreen", () => {
  it("renders correctly", () => {
    const component = shallow(<MenuScreen navigation={navigation} />);
    expect(component).toMatchSnapshot();
  });
});
