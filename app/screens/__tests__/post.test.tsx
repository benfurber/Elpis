import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { UnwrappedPostScreen } from "../post";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("PostScreen", () => {
  describe("when post provided", () => {
    it("renders correctly", () => {
      const post = {
        author: {
          avatarPath: require("assets/images/empower_two_women_logo.png"),
          name: "Empodere Duas Mulheres",
        },
        comments: [],
        createdAt: new Date("2000-01-01"),
        content: null,
        id: "10387-314fs-12asdbj",
        imagePath: require("assets/images/image_post_1.jpg"),
      };

      const component = shallow(
        <UnwrappedPostScreen navigation={navigation} post={post} />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when no post provided", () => {
    it("renders correctly", () => {
      const component = shallow(
        <UnwrappedPostScreen navigation={navigation} />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
