import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { OnboardingScreen } from "screens";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("OnboardingScreen", () => {
  it("renders correctly", () => {
    const component = shallow(<OnboardingScreen navigation={navigation} />);

    expect(component).toMatchSnapshot();
  });
});
