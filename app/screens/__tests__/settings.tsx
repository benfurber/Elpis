import "react-native";
import React from "react";
import { shallow, mount } from "enzyme";

import { SettingsScreen } from "screens";
import { Icon } from "components";
import { Text } from "react-native";

let navigation;
navigation = {
  navigate: jest.fn(),
}

describe("SettingsScreen", () => {
  it("renders correctly", () => {
    const component = shallow(<SettingsScreen navigation={navigation} />);
    expect(component).toMatchSnapshot();
  });

  describe('logout', () => {
    const component = shallow(<SettingsScreen navigation={navigation} />);
    const logoutIcon = component.find(Icon)
    it("should render a logout icon", () => {
      expect(logoutIcon).toHaveLength(1)
      expect(logoutIcon.props().name).toEqual("sign-out-alt")
    })
  });
});