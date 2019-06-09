import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { FormCompleteProfile } from "components";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("LoginForm", () => {
  describe("when active", () => {
    it("renders correctly", () => {
      const onPress = () => jest.fn();
      const component = shallow(
        <FormCompleteProfile navigation={navigation} onPress={onPress} />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when passwords match", () => {
    describe("and the password is strong", () => {
      it("renders correctly", () => {
        const onPress = () => jest.fn();
        const component = shallow(
          <FormCompleteProfile navigation={navigation} onPress={onPress} />,
        );

        component.setState({
          password: "s3cuRe!!!",
          passwordRepeat: "s3cuRe!!!",
        });

        expect(component).toMatchSnapshot();
      });
    });

    describe("and the password is weak", () => {
      it("renders correctly", () => {
        const onPress = () => jest.fn();
        const component = shallow(
          <FormCompleteProfile navigation={navigation} onPress={onPress} />,
        );

        component.setState({
          password: "abc",
          passwordRepeat: "abc",
        });

        expect(component).toMatchSnapshot();
      });
    });
  });

  describe("when there's an error", () => {
    it("renders correctly", () => {
      const onPress = () => jest.fn();
      const component = shallow(
        <FormCompleteProfile navigation={navigation} onPress={onPress} />,
      );

      component.find("ButtonSubmit").simulate("press");

      expect(component).toMatchSnapshot();
    });
  });
});
