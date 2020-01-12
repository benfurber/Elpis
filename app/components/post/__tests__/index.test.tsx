import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { author } from "../../../factories";

import { Post } from "components";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("Post", () => {
  describe("when the body is set to display", () => {
    it("renders correctly", () => {
      const post = {
        author,
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
        author,
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
        author,
        comments: [
          {
            author,
            content:
              "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
            id: "21097",
            publishedAt: new Date("2019-01-01"),
            replies: [],
            totalReplies: 0,
          },
        ],
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
