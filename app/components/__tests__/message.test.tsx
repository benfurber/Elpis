import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Message } from "components";
import { message } from "factories";

let navigation;

describe("Message", () => {
  describe("when another user", () => {
    it("renders correctly", () => {
      const currentUser = false;

      const component = shallow(
        <Message
          currentUser={currentUser}
          item={message}
          navigation={navigation}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when current user", () => {
    it("renders correctly", () => {
      const currentUser = true;

      const component = shallow(
        <Message
          currentUser={currentUser}
          item={message}
          navigation={navigation}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
