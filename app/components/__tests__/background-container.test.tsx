import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";

import { BackgroundContainer } from "components";

describe("BackgroundContainer", () => {
  it("renders correctly", () => {
    const component = shallow(
      <BackgroundContainer>
        <Text>Any child component</Text>
      </BackgroundContainer>,
    );

    expect(component).toMatchSnapshot();
  });
});
