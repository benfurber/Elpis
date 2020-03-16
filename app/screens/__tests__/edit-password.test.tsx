import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { UnwrappedEditPasswordScreen } from "../edit-password";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("UnwrappedEditPasswordScreen", () => {
  it("renders correctly", () => {
    const component = shallow(
      <UnwrappedEditPasswordScreen
        navigation={navigation}
        onPress={() => jest.fn()}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
