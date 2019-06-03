import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { OnboardingThankYouScreen } from "screens";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("OnboardingThankYouScreen", () => {
  it("renders correctly", () => {
    const component = shallow(
      <OnboardingThankYouScreen navigation={navigation} />,
    );

    expect(component).toMatchSnapshot();
  });
});
