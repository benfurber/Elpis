import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { ButtonSubmit } from "components";

describe("ButtonSubmit", () => {
  describe("When active", () => {
    it("renders correctly", () => {
      const display = "active";
      const label = "Submit";
      const onPress = () => jest.fn();

      const component = shallow(
        <ButtonSubmit display={display} onPress={onPress} label={label} />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("When loading", () => {
    it("renders correctly", () => {
      const display = "loading";
      const label = "Submit";
      const onPress = () => jest.fn();

      const component = shallow(
        <ButtonSubmit display={display} onPress={onPress} label={label} />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
