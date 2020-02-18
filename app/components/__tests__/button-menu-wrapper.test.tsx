import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { ButtonMenuWrapper } from "components";

describe("ButtonMenuWrapper", () => {
  it("renders correctly", () => {
    const component = shallow(
      <ButtonMenuWrapper
        iconName="rocket"
        onPress={() => jest.fn()}
        text="Button"
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
