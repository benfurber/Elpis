import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { mockDateNow } from "../../../test-utils";

import { Notification } from "components";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("Notification", () => {
  describe("new", () => {
    it("for comment type it renders correctly", () => {
      mockDateNow("2019-10-09");

      const commentNotification = {
        content: {
          author: {
            name: "May",
            avatarPath: "",
          },
          content:
            "Lucas ipsum dolor sit amet organa c-3p0 hutt anakin ponda biggs yoda moff jinn solo. Mara fisto yoda ben jade. Mace ben wedge jinn leia luke. Moff solo obi-wan antilles grievous lando mandalore.",
          createdAt: new Date("2019-09-23"),
          id: "93716",
        },
        newNotification: true,
        type: "comment",
        postId: "b845q3",
      };

      const component = shallow(
        <Notification item={commentNotification} navigation={navigation} />,
      );

      expect(component).toMatchSnapshot();
    });

    it("for post type it renders correctly", () => {
      mockDateNow("2019-10-09");

      const postNotification = {
        content: {
          author: {
            name: "E2M",
            avatarPath: "",
          },
          content:
            "Mara fisto yoda ben jade. Mace ben wedge jinn leia luke. Lando mandalore.",
          createdAt: new Date("2019-09-23"),
          id: "986sasdfd",
          imagePath: "",
        },
        newNotification: true,
        type: "post",
      };

      const component = shallow(
        <Notification item={postNotification} navigation={navigation} />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("old", () => {
    it("for comment type it renders correctly", () => {
      mockDateNow("2019-10-09");

      const commentNotification = {
        content: {
          author: {
            name: "May",
            avatarPath: "",
          },
          content:
            "Lucas ipsum dolor sit amet organa c-3p0 hutt anakin ponda biggs yoda moff jinn solo. Mara fisto yoda ben jade. Mace ben wedge jinn leia luke. Moff solo obi-wan antilles grievous lando mandalore.",
          createdAt: new Date("2019-09-23"),
          id: "315928bjaf",
        },
        newNotification: false,
        type: "comment",
        postId: "35245gt1",
      };

      const component = shallow(
        <Notification item={commentNotification} navigation={navigation} />,
      );

      expect(component).toMatchSnapshot();
    });

    it("for post type it renders correctly", () => {
      mockDateNow("2019-10-09");

      const postNotification = {
        content: {
          author: {
            name: "E2M",
            avatarPath: "",
          },
          content:
            "Mara fisto yoda ben jade. Mace ben wedge jinn leia luke. Lando mandalore.",
          createdAt: new Date("2019-09-23"),
          id: "078vw213",
          imagePath: "",
        },
        newNotification: false,
        type: "post",
      };

      const component = shallow(
        <Notification item={postNotification} navigation={navigation} />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
