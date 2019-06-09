import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { OnboardingWelcomeScreen } from "screens";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("OnboardingWelcomeScreen", () => {
  it("renders correctly", () => {
    const component = shallow(
      <OnboardingWelcomeScreen navigation={navigation} />,
    );

    expect(component).toMatchSnapshot();
  });
});
