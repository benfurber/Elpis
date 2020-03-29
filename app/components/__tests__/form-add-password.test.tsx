import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { FormAddPassword } from "components";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("FormAddPassword", () => {
  describe("when active", () => {
    it("renders correctly", () => {
      const onPress = () => jest.fn();
      const component = shallow(
        <FormAddPassword navigation={navigation} onPress={onPress} />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when passwords match", () => {
    describe("and the password is strong", () => {
      it("renders correctly", () => {
        const onPress = () => jest.fn();
        const component = shallow(
          <FormAddPassword navigation={navigation} onPress={onPress} />,
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
          <FormAddPassword navigation={navigation} onPress={onPress} />,
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
        <FormAddPassword navigation={navigation} onPress={onPress} />,
      );

      component.setState({
        display: "error",
        displayMessage: "error",
        message: "Something went wrong",
      });

      expect(component).toMatchSnapshot();
    });
  });

  describe("when extra props are provided", () => {
    it("renders correctly", () => {
      const extraProps = { id: "349ugdfs", passwordRequest: "1234425wr" };
      const onPress = () => jest.fn();

      const component = shallow(
        <FormAddPassword
          extraProps={extraProps}
          navigation={navigation}
          onPress={onPress}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
