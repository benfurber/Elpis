import "react-native";
import React from "react";
import { shallow } from "enzyme";
import { MockedProvider } from "@apollo/react-testing";

import { comment } from "../../../factories";
import { mockDateNow } from "../../../test-utils";

import { Notification } from "../notification";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("Notification", () => {
  const basePost = {
    author: {
      id: "1352fe",
      name: "E2M",
      avatarPath: "",
    },
    content:
      "Mara fisto yoda ben jade. Mace ben wedge jinn leia luke. Lando mandalore.",
    createdAt: new Date("2019-09-23"),
    id: "986sasdfd",
    imagePath: "",
  };

  const baseReply = {
    author: {
      id: "135fad2fe",
      name: "May",
      avatarPath: "",
    },
    comment,
    content:
      "Mara fisto yoda ben jade. Mace ben wedge jinn leia luke. Lando mandalore.",
    createdAt: new Date("2019-09-23"),
    id: "986sasdfd",
  };

  describe("new", () => {
    it("for comment type it renders correctly", () => {
      mockDateNow("2019-10-09");

      const commentNotification = {
        content: {
          post: basePost,
          reply: baseReply,
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
          post: basePost,
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
          post: basePost,
          reply: baseReply,
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
          post: basePost,
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
