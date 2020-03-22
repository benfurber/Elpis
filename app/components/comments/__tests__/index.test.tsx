import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { post, user } from "factories";

import { Comments } from "..";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("Comments", () => {
  describe("when there are comments", () => {
    it("renders correctly", () => {
      const comment = {
        author: user,
        content:
          "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
        edited: false,
        id: "21097",
        isAuthorCurrentUser: false,
        publishedAt: new Date("2019-01-01"),
        replies: [],
        totalReplies: 0,
      };

      const postForTest = {
        ...post,
        comments: [comment],
      };

      const component = shallow(
        <Comments
          post={postForTest}
          navigation={navigation}
          setCommentId={() => jest.fn()}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when there are no comments", () => {
    it("renders correctly", () => {
      const component = shallow(
        <Comments
          post={post}
          navigation={navigation}
          setCommentId={() => jest.fn()}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
