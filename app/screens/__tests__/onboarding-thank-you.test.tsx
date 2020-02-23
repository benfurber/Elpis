import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { OnboardingFinalScreen } from "screens";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("OnboardingFinalScreen", () => {
  it("renders correctly", () => {
    const component = shallow(
      <OnboardingFinalScreen navigation={navigation} />,
    );

    expect(component).toMatchSnapshot();
  });
});
