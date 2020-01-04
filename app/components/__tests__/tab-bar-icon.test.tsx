import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { IconTabBar } from "components";

describe("IconTabBar", () => {
  describe("Feed", () => {
    it("renders correctly when not focused", () => {
      const component = shallow(
        <IconTabBar routeName={"Feed"} focused={false} />,
      );
      expect(component).toMatchSnapshot();
    });
    it("renders correctly when focused", () => {
      const component = shallow(
        <IconTabBar routeName={"Feed"} focused={true} />,
      );
      expect(component).toMatchSnapshot();
    });
  });
  describe("Feedback", () => {
    it("renders correctly when not focused", () => {
      const component = shallow(
        <IconTabBar routeName={"Feedback"} focused={false} />,
      );
      expect(component).toMatchSnapshot();
    });
    it("renders correctly when focused", () => {
      const component = shallow(
        <IconTabBar routeName={"Feedback"} focused={true} />,
      );
      expect(component).toMatchSnapshot();
    });
  });
  describe("Notification", () => {
    it("renders correctly when not focused", () => {
      const component = shallow(
        <IconTabBar routeName={"Notification"} focused={false} />,
      );
      expect(component).toMatchSnapshot();
    });
    it("renders correctly when focused", () => {
      const component = shallow(
        <IconTabBar routeName={"Notification"} focused={true} />,
      );
      expect(component).toMatchSnapshot();
    });
  });
  describe("Settings", () => {
    it("renders correctly when not focused", () => {
      const component = shallow(
        <IconTabBar routeName={"Settings"} focused={false} />,
      );
      expect(component).toMatchSnapshot();
    });
    it("renders correctly when focused", () => {
      const component = shallow(
        <IconTabBar routeName={"Settings"} focused={true} />,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
