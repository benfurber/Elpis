import "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { shallow } from "enzyme";
import { MenuScreen } from "screens";
import { Icon } from "components";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("MenuScreen", () => {
  it("renders correctly", () => {
    const component = shallow(<MenuScreen navigation={navigation} />);
    expect(component).toMatchSnapshot();
  });

  describe("logout", () => {
    const component = shallow(<MenuScreen navigation={navigation} />);
    const logoutIcon = component.find(Icon);

    it("should render a logout icon", () => {
      expect(logoutIcon).toHaveLength(1);
      expect(logoutIcon.props().name).toEqual("sign-out-alt");
      expect(component.find(TouchableOpacity)).toHaveLength(1);
    });
  });
});
