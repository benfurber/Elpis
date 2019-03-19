import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Post } from "components";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("Post", () => {
  describe("when the body is set to display", () => {
    it("renders correctly", () => {
      const post = {
        author: {
          avatarPath: require("assets/images/empower_two_women_logo.png")
        },
        date: new Date("2000-01-01"),
        description: "A string",
        id: "10387-314fs-12asdbj",
        imagePath: require("assets/images/image_post_1.jpg")
      };
      const setDisplay = "body";
      const component = shallow(
        <Post post={post} navigation={navigation} setDisplay={setDisplay} />
      );

      expect(component).toMatchSnapshot();
    });

    it("renders correctly if not description is provided", () => {
      const post = {
        author: {
          avatarPath: require("assets/images/empower_two_women_logo.png")
        },
        date: new Date("2000-01-01"),
        description: null,
        id: "10387-314fs-12asdbj",
        imagePath: require("assets/images/image_post_1.jpg")
      };
      const component = shallow(<Post post={post} navigation={navigation} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe("when comments are set to display", () => {
    it("renders correctly", () => {
      const post = {
        author: {
          avatarPath: require("assets/images/empower_two_women_logo.png")
        },
        date: new Date("2000-01-01"),
        description: "A string",
        id: "10387-314fs-12asdbj",
        imagePath: require("assets/images/image_post_1.jpg")
      };
      const setDisplay = "comments";
      const component = shallow(
        <Post post={post} navigation={navigation} setDisplay={setDisplay} />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
