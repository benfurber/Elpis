import "react-native";
import React from "react";
import { shallow } from "enzyme";
import { MockedProvider } from "@apollo/react-testing";

import { post, reply } from "factories";
import { mockDateNow } from "../../../test-utils";

import { Notification } from "../notification";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("Notification", () => {
  describe("new", () => {
    it("for comment type it renders correctly", () => {
      mockDateNow("2019-10-09");

      const commentNotification = {
        content: {
          post,
          reply: reply,
          type: "comment",
        },
        createdAt: new Date("2019-09-23"),
        id: "93716ewrs",
        newNotification: true,
      };

      const component = shallow(
        <MockedProvider>
          <Notification item={commentNotification} navigation={navigation} />
        </MockedProvider>,
      );

      expect(component).toMatchSnapshot();
    });

    it("for post type it renders correctly", () => {
      mockDateNow("2019-10-09");

      const postNotification = {
        content: {
          post,
          reply: null,
          type: "post",
        },
        createdAt: new Date("2019-09-23"),
        id: "93716ewrs",
        newNotification: true,
      };

      const component = shallow(
        <MockedProvider>
          <Notification item={postNotification} navigation={navigation} />
        </MockedProvider>,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("old", () => {
    it("for comment type it renders correctly", () => {
      mockDateNow("2019-10-09");

      const commentNotification = {
        content: {
          post,
          reply: reply,
          type: "comment",
        },
        createdAt: new Date("2019-09-23"),
        id: "93716ewrs",
        newNotification: false,
      };

      const component = shallow(
        <MockedProvider>
          <Notification item={commentNotification} navigation={navigation} />
        </MockedProvider>,
      );

      expect(component).toMatchSnapshot();
    });

    it("for post type it renders correctly", () => {
      mockDateNow("2019-10-09");

      const postNotification = {
        content: {
          post,
          reply: null,
          type: "post",
        },
        createdAt: new Date("2019-09-23"),
        id: "93716ewrs",
        newNotification: true,
      };

      const component = shallow(
        <MockedProvider>
          <Notification item={postNotification} navigation={navigation} />
        </MockedProvider>,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
