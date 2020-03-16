import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { ButtonOutline } from "components";

describe("ButtonOutline", () => {
  describe("without a text prop", () => {
    it("renders correctly", () => {
      const label = "Tap here";
      const onPress = jest.fn();
      const component = shallow(
        <ButtonOutline label={label} onPress={() => onPress} />,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
