import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { UnwrappedLoginScreen } from "../login";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("LoginScreen", () => {
  it("renders correctly", () => {
    const component = shallow(<UnwrappedLoginScreen navigation={navigation} />);

    expect(component).toMatchSnapshot();
  });

  it("renders correctly when given an error", () => {
    const error = { message: "There was a problem" };
    const component = shallow(
      <UnwrappedLoginScreen error={error} navigation={navigation} />,
    );

    expect(component).toMatchSnapshot();
  });
});
