import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { TextInput } from "components";

describe("TextInput", () => {
  const genericProps = {
    onChangeText: () => null,
    placeholder: "password",
    secureTextEntry: true,
    value: "password",
  };

  describe("when active", () => {
    it("renders correctly", () => {
      const component = shallow(
        <TextInput
          displayStyle="active"
          textContentType={"password"}
          {...genericProps}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when loading", () => {
    it("renders correctly", () => {
      const component = shallow(
        <TextInput
          displayStyle="loading"
          textContentType={"password"}
          {...genericProps}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when error", () => {
    it("renders correctly", () => {
      const component = shallow(
        <TextInput
          displayStyle="error"
          textContentType={"password"}
          {...genericProps}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
