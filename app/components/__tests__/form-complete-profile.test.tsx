import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { FormCompleteProfile } from "components";

describe("LoginForm", () => {
  describe("when active", () => {
    it("renders correctly", () => {
      const onPress = () => jest.fn();
      const component = shallow(<FormCompleteProfile onPress={onPress} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe("when passwords match", () => {
    it("renders correctly", () => {
      const onPress = () => jest.fn();
      const component = shallow(<FormCompleteProfile onPress={onPress} />);

      component.setState({ password: "s3cure", passwordRepeat: "s3cure" });

      expect(component).toMatchSnapshot();
    });
  });

  describe("when there's an error", () => {
    it("renders correctly", () => {
      const onPress = () => jest.fn();
      const component = shallow(<FormCompleteProfile onPress={onPress} />);

      component.setState({
        display: "error",
        errorMessage: "Passwords didn't match",
      });

      expect(component).toMatchSnapshot();
    });
  });
});
