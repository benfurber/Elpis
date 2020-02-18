import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { ButtonLogout } from "components";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("ButtonLogout", () => {
  it("renders correctly", () => {
    const component = shallow(<ButtonLogout navigation={navigation} />);
    expect(component).toMatchSnapshot();
  });
});
