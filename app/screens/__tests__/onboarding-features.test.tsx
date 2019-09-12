import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { OnboardingFeaturesScreen } from "screens";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("OnboardingFeaturesScreen", () => {
  it("renders correctly", () => {
    const component = shallow(
      <OnboardingFeaturesScreen navigation={navigation} />,
    );

    expect(component).toMatchSnapshot();
  });
});
