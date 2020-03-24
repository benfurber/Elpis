import React from "react";
import { shallow } from "enzyme";

import { comment, commentWithoutReplies, post, user } from "factories";
import { mockDateNow } from "../../../test-utils";

import { Replies } from "../replies";

let navigation;

describe("Comments<Replies>", () => {
  describe("when there are replies", () => {
    it("renders correctly", () => {
      mockDateNow("2019-01-03T13:00:00");

      const reply1 = {
        author: user,
        comment,
        content:
          "Meu pai também fez o mesmo. Logo depois que minha mãe pediu o divórcio porque sofria violência dentro de casa, ele pegou as malas, se mudou e sumiu no mundo. Nem faço mais questão de saber pra onde ele foi.",
        edited: false,
        id: "21098",
        isAuthorCurrentUser: false,
        link: null,
        publishedAt: new Date("2019-01-02"),
      };

      const reply2 = {
        author: user,
        comment,
        content: "Nem faço mais questão de saber pra onde ele foi.",
        edited: true,
        id: "21099",
        isAuthorCurrentUser: true,
        link: "https://www.bbc.co.uk/news/business-50656178",
        publishedAt: new Date("2019-01-03"),
      };

      comment.replies = [reply1, reply2];

      const noReplies = "No replies label";
      const onPress = () => jest.fn();

      const component = shallow(
        <Replies
          item={comment}
          navigation={navigation}
          noReplies={noReplies}
          onPress={onPress}
          postId={post.id}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when there are no replies", () => {
    it("renders correctly", () => {
      mockDateNow("2019-01-02");

      const noReplies = "No replies right now, add one!";
      const onPress = () => jest.fn();

      const component = shallow(
        <Replies
          item={commentWithoutReplies}
          navigation={navigation}
          noReplies={noReplies}
          onPress={onPress}
          postId={post.id}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
