import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { UnwrappedResetPasswordScreen } from "../reset-password";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("ResetPasswordScreen", () => {
  it("renders correctly", () => {
    const id = "user-id";
    const passwordRequest = "213927ytwrsfhuodf";

    const component = shallow(
      <UnwrappedResetPasswordScreen
        id={id}
        navigation={navigation}
        passwordRequest={passwordRequest}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
