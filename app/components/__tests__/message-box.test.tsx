import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { MessageBox } from "components";

describe("MessageBox", () => {
  describe("when passive", () => {
    it("renders correctly", () => {
      const component = shallow(
        <MessageBox display={"passive"} message={"Everything OK"} />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when warning", () => {
    it("renders correctly", () => {
      const component = shallow(
        <MessageBox display={"warn"} message={"Are you sure?"} />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("and in error", () => {
    it("renders correctly", () => {
      const component = shallow(
        <MessageBox display={"error"} message={"PANIC!"} />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
