import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { UnwrappedRequestNewPasswordScreen } from "../request-new-password";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("UnwrappedRequestNewPasswordScreen", () => {
  it("renders correctly when requesting", () => {
    const component = shallow(
      <UnwrappedRequestNewPasswordScreen navigation={navigation} />,
    );

    expect(component).toMatchSnapshot();
  });

  it("renders correctly when requested", () => {
    const component = shallow(
      <UnwrappedRequestNewPasswordScreen navigation={navigation} />,
    );

    component.setState({ requested: true });

    expect(component).toMatchSnapshot();
  });
});
