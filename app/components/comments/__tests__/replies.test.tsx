import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";

import { author, comment } from "../../../factories";
import { mockDateNow } from "../../../test-utils";

import { Replies } from "../replies";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("Comments<Replies>", () => {
  describe("when there are replies", () => {
    it("renders correctly", () => {
      mockDateNow("2019-01-03T13:00:00");

      const reply1 = {
        author,
        comment,
        content:
          "Meu pai também fez o mesmo. Logo depois que minha mãe pediu o divórcio porque sofria violência dentro de casa, ele pegou as malas, se mudou e sumiu no mundo. Nem faço mais questão de saber pra onde ele foi.",
        id: "21098",
        link: null,
        publishedAt: new Date("2019-01-02"),
      };

      const reply2 = {
        author,
        comment,
        content: "Nem faço mais questão de saber pra onde ele foi.",
        id: "21099",
        link: "https://www.bbc.co.uk/news/business-50656178",
        publishedAt: new Date("2019-01-03"),
      };

      const item = {
        author,
        content:
          "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
        id: "21097",
        publishedAt: new Date("2019-01-01"),
        replies: [reply1, reply2],
        totalReplies: 2,
      };
      const header = <Text>Header with post details</Text>;
      const noReplies = "No replies label";
      const onPress = () => jest.fn();

      const component = shallow(
        <Replies
          header={header}
          item={item}
          navigation={navigation}
          noReplies={noReplies}
          onPress={onPress}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when there are no replies", () => {
    it("renders correctly", () => {
      mockDateNow("2019-01-02");

      const item = {
        author,
        content:
          "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
        id: "21097",
        publishedAt: new Date("2019-01-01"),
        replies: [],
        totalReplies: 0,
      };
      const header = <Text>Header with post details</Text>;
      const noReplies = "No replies right now, add one!";
      const onPress = () => jest.fn();

      const component = shallow(
        <Replies
          header={header}
          item={item}
          navigation={navigation}
          noReplies={noReplies}
          onPress={onPress}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
