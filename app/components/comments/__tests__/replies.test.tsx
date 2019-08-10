import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";

import { Replies } from "../replies";

import { mockDateNow } from "../../../test-utils";

describe("Comments<Replies>", () => {
  describe("when there are replies", () => {
    it("renders correctly", () => {
      mockDateNow("2019-01-03T13:00:00");

      const reply1 = {
        author: {
          avatarPath: require("assets/images/profile-pic-annon.png"),
          name: "Kelli S",
        },
        content:
          "Meu pai também fez o mesmo. Logo depois que minha mãe pediu o divórcio porque sofria violência dentro de casa, ele pegou as malas, se mudou e sumiu no mundo. Nem faço mais questão de saber pra onde ele foi.",
        createdAt: new Date("2019-01-02"),
        id: "21098",
      };

      const reply2 = {
        author: {
          avatarPath: require("assets/images/profile-pic-annon.png"),
          name: "Kelli S",
        },
        content: "Nem faço mais questão de saber pra onde ele foi.",
        createdAt: new Date("2019-01-03"),
        id: "21099",
      };

      const item = {
        author: {
          avatarPath: require("assets/images/profile-pic-may.jpg"),
          name: "Maynara F",
        },
        content:
          "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
        createdAt: new Date("2019-01-01"),
        id: "21097",
        replies: [reply1, reply2],
        totalReplies: 2,
      };
      const header = <Text>Header with post details</Text>;
      const noReplies = "No replies label";
      const onPress = () => jest.fn();

      const component = shallow(
        <Replies
          item={item}
          header={header}
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
        author: {
          avatarPath: require("assets/images/profile-pic-may.jpg"),
          name: "Maynara F",
        },
        content:
          "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
        createdAt: new Date("2019-01-01"),
        id: "21097",
        replies: [],
        totalReplies: 0,
      };
      const header = <Text>Header with post details</Text>;
      const noReplies = "No replies right now, add one!";
      const onPress = () => jest.fn();

      const component = shallow(
        <Replies
          item={item}
          header={header}
          noReplies={noReplies}
          onPress={onPress}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
