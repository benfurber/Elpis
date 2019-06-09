import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { ProfilePictureField } from "components";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("ProfilePictureField", () => {
  describe("when in active state", () => {
    it("renders correctly", () => {
      const component = shallow(
        <ProfilePictureField display={"active"} navigation={navigation} />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when in error state", () => {
    it("renders correctly", () => {
      const component = shallow(
        <ProfilePictureField display={"error"} navigation={navigation} />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
