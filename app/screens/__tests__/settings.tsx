import "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { shallow, mount } from "enzyme";
import { SettingsScreen } from "screens";
import { Icon } from "components";

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
      expect(component.find(TouchableOpacity)).toHaveLength(1)
    })
    // still need to get this test working!!
    // it("should navigate to welcome page onPress", () => {
    //   logoutIcon.simulate('press')
    //   expect(navigation.navigate).toHaveBeenCalled()
    //   expect(navigation.navigate).toHaveBeenCalledWith("Welcome")
    // })
  });
});