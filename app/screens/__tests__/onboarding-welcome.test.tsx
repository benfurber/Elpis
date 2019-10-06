import "react-native";
import React from "react";
import { shallow } from "enzyme";
import { MockedProvider } from "@apollo/react-testing";

import { OnboardingWelcomeScreen } from "screens";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("OnboardingWelcomeScreen", () => {
  it("renders correctly", () => {
    const component = shallow(
      <MockedProvider>
        <OnboardingWelcomeScreen navigation={navigation} />
      </MockedProvider>,
    );

    expect(component).toMatchSnapshot();
  });
});
