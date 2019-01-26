import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { LoginForm } from "components";

describe("LoginForm", () => {
  it("renders correctly", () => {
    const component = shallow(<LoginForm />);

    expect(component).toMatchSnapshot();
  });
});
