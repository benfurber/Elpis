import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { TextInput } from "components";

describe("TextInput", () => {

  const genericProps = {
    onChangeText: () => null,
    placeholder: "password",
    secureTextEntry: true,
    textContentType: "password",
    value: "password",
  }

  describe("when active", () => {
    it("renders correctly", () => {
      const component = shallow(
        <TextInput
          displayStyle="active"
          {...genericProps}
        />
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when loading", () => {
    it("renders correctly", () => {
      const component = shallow(
        <TextInput
          displayStyle="loading"
          {...genericProps}
        />
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when error", () => {
    it("renders correctly", () => {
      const component = shallow(
        <TextInput
          displayStyle="error"
          {...genericProps}
        />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
