import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";

import { BackgroundContainer } from "components";

describe("Icon", () => {
  it("renders correctly", () => {
    const component = shallow(
      <BackgroundContainer>
        <Text>Any child component</Text>
      </BackgroundContainer>,
    );

    expect(component).toMatchSnapshot();
  });
});
