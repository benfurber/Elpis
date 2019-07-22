import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { OnboardingAddPasswordScreen } from "screens";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("OnboardingAddPasswordScreen", () => {
  it("renders correctly", () => {
    const component = shallow(
      <OnboardingAddPasswordScreen navigation={navigation} />,
    );

    expect(component).toMatchSnapshot();
  });
});
