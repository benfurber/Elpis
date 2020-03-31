import React from "react";

import { MockedProvider } from "@apollo/react-testing";
import { shallow } from "enzyme";

import { comment, commentWithoutReplies, user } from "factories";
import { COMMENT_WITH_REPLIES } from "queries";
import { mockDateNow } from "../../test-utils";

import { ReplyList } from "components";

let navigation;

describe("ReplyList", () => {
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

      const mocks = [
        {
          request: {
            query: COMMENT_WITH_REPLIES,
            variables: {
              id: comment.id,
            },
          },
          result: {
            data: {
              comment,
            },
          },
        },
      ];

      const backButtonOnPress = () => jest.fn();

      const component = shallow(
        <MockedProvider mocks={mocks}>
          <ReplyList
            backButtonOnPress={backButtonOnPress}
            id={comment.id}
            navigation={navigation}
          />
        </MockedProvider>,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when there are no replies", () => {
    it("renders correctly", () => {
      mockDateNow("2019-01-02");

      const mocks = [
        {
          request: {
            query: COMMENT_WITH_REPLIES,
            variables: {
              id: commentWithoutReplies.id,
            },
          },
          result: {
            data: {
              comment: commentWithoutReplies,
            },
          },
        },
      ];

      const backButtonOnPress = () => jest.fn();

      const component = shallow(
        <MockedProvider mocks={mocks}>
          <ReplyList
            backButtonOnPress={backButtonOnPress}
            id={commentWithoutReplies.id}
            navigation={navigation}
          />
        </MockedProvider>,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
