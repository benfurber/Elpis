import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { LoginForm } from "components";

const navigation = { navigate: jest.fn() };

describe("LoginForm", () => {
  it("renders correctly", () => {
    const component = shallow(<LoginForm navigation={navigation} />);

    expect(component).toMatchSnapshot();
  });
});
