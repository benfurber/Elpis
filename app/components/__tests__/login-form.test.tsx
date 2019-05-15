import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { LoginForm } from "components";

const navigation = { navigate: jest.fn() };

describe("LoginForm", () => {
  describe("when active", () => {
    it("renders correctly", () => {
      const component = shallow(<LoginForm navigation={navigation} />);
  
      expect(component).toMatchSnapshot();
    });
  })
  
  describe("when loading", () => {
    it("renders correctly", () => {
      const component = shallow(<LoginForm navigation={navigation} />);
      component.setState({display: "loading"});
      expect(component).toMatchSnapshot();
    });
  })
  
});
