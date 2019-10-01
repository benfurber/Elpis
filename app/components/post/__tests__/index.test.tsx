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
          avatarPath: require("assets/images/empower_two_women_logo.png"),
          name: "Empodere Duas Mulheres",
        },
        comments: [],
        createdAt: new Date("2000-01-01"),
        content: null,
        id: "10387-314fs-12asdbj",
        imagePath: require("assets/images/image_post_1.jpg"),
      };
      const setDisplay = "body";
      const component = shallow(
        <Post post={post} navigation={navigation} setDisplay={setDisplay} />,
      );

      expect(component).toMatchSnapshot();
    });

    it("renders correctly if no content is provided", () => {
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
      const component = shallow(<Post post={post} navigation={navigation} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe("when comments are set to display", () => {
    it("renders correctly", () => {
      const post = {
        author: {
          avatarPath: require("assets/images/empower_two_women_logo.png"),
          name: "Empodere Duas Mulheres",
        },
        comments: [
          {
            author: {
              avatarPath: require("assets/images/profile-pic-may.jpg"),
              name: "May F",
            },
            content:
              "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
            createdAt: new Date("2019-01-01"),
            id: "21097",
            replies: [],
            totalReplies: 0,
          },
        ],
        content: null,
        createdAt: new Date("2000-01-01"),
        id: "10387-314fs-12asdbj",
        imagePath: require("assets/images/image_post_1.jpg"),
      };
      const setDisplay = "comments";
      const component = shallow(
        <Post post={post} navigation={navigation} setDisplay={setDisplay} />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
