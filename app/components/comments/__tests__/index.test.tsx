import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Comments } from "..";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("Comments", () => {
  describe("when there are comments", () => {
    it("renders correctly", () => {
      const comment = {
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
      };

      const component = shallow(
        <Comments
          comments={[comment]}
          content={"A simple string"}
          navigation={navigation}
          postId={"0"}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when there are no comments", () => {
    it("renders correctly", () => {
      const component = shallow(
        <Comments
          comments={[]}
          content={"A simple string"}
          navigation={navigation}
          postId={"0"}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
