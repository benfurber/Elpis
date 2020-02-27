import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { FormAddProfilePicture } from "components";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("FormAddProfilePicture", () => {
  describe("when active", () => {
    it("renders correctly", () => {
      const onPress = () => jest.fn();
      const component = shallow(
        <FormAddProfilePicture navigation={navigation} onPress={onPress} />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
