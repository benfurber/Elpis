import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { comment, community } from "factories";

import { Post } from "components";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("Post", () => {
  describe("when the body is set to display", () => {
    it("renders correctly", () => {
      const post = {
        author: community,
        comments: [],
        content: null,
        id: "10387-314fs-12asdbj",
        imagePath: require("assets/images/image_post_1.jpg"),
        publishedAt: new Date("2000-01-01"),
      };
      const setDisplay = "body";
      const component = shallow(
        <Post post={post} navigation={navigation} setDisplay={setDisplay} />,
      );

      expect(component).toMatchSnapshot();
    });

    it("renders correctly if no content is provided", () => {
      const post = {
        author: community,
        comments: [],
        content: null,
        id: "10387-314fs-12asdbj",
        imagePath: require("assets/images/image_post_1.jpg"),
        publishedAt: new Date("2000-01-01"),
      };
      const component = shallow(<Post post={post} navigation={navigation} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe("when comments are set to display", () => {
    it("renders correctly", () => {
      const post = {
        author: community,
        comments: [comment],
        content: null,
        id: "10387-314fs-12asdbj",
        imagePath: require("assets/images/image_post_1.jpg"),
        publishedAt: new Date("2000-01-01"),
      };
      const setDisplay = "comments";
      const component = shallow(
        <Post post={post} navigation={navigation} setDisplay={setDisplay} />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
