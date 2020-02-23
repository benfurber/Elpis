import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { OnboardingAddProfilePictureScreen } from "screens";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("OnboardingAddProfilePictureScreen", () => {
  it("renders correctly", () => {
    const component = shallow(
      <OnboardingAddProfilePictureScreen navigation={navigation} />,
    );

    expect(component).toMatchSnapshot();
  });
});
