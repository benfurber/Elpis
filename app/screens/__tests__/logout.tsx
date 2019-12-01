import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { labels } from "labels";
import { LogoutScreen } from "screens";
import { ButtonSubmit } from "../../components/button-submit"

let navigation;
navigation = {
  navigate: jest.fn(),
}

describe("LogoutScreen", () => {
  it("renders correctly", () => {
    const component = shallow(<LogoutScreen navigation={navigation} />);
    expect(component).toMatchSnapshot();
  });

  describe('loginButton', () => {
    const component = shallow(<LogoutScreen navigation={navigation} />);
    const loginButton = component.find(ButtonSubmit)
    it("should render a login button", () => {
      expect(loginButton).toHaveLength(1)
      expect(loginButton.props().label).toEqual(labels.login)
    })

    it("should navigate to the welcome screen when pressed", () => {  
      loginButton.props().onPress()
      expect(navigation.navigate).toHaveBeenCalled()
      expect(navigation.navigate).toHaveBeenCalledWith("Welcome")
    })
  });
});