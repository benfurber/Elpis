import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { OnboardingCompleteProfileScreen } from "screens";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("OnboardingCompleteProfileScreen", () => {
  it("renders correctly", () => {
    const component = shallow(
      <OnboardingCompleteProfileScreen navigation={navigation} />,
    );

    expect(component).toMatchSnapshot();
  });
});
