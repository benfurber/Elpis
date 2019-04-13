import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Replies } from "../replies";

describe("Replies", () => {
  describe("when there are replies", () => {
    it("renders correctly", () => {
      const reply1 = {
        author: {
          avatarPath: require("assets/images/profile-pic-annon.png"),
          name: "Kelli S"
        },
        body:
          "Meu pai também fez o mesmo. Logo depois que minha mãe pediu o divórcio porque sofria violência dentro de casa, ele pegou as malas, se mudou e sumiu no mundo. Nem faço mais questão de saber pra onde ele foi.",
        dateCreated: new Date("2019-01-02"),
        id: "21098"
      };

      const reply2 = {
        author: {
          avatarPath: require("assets/images/profile-pic-annon.png"),
          name: "Kelli S"
        },
        body: "Nem faço mais questão de saber pra onde ele foi.",
        dateCreated: new Date("2019-01-03"),
        id: "21099"
      };

      const item = {
        author: {
          avatarPath: require("assets/images/profile-pic-may.jpg"),
          name: "Maynara F"
        },
        body:
          "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
        dateCreated: new Date("2019-01-01"),
        id: "21097",
        replies: [reply1, reply2],
        title: "Meu pai fez o que ela mandou…",
        totalReplies: 2
      };
      const onPressComment = () => jest.fn();

      const component = shallow(
        <Replies item={item} onPressComment={onPressComment} />
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when there are no replies", () => {
    it("renders correctly", () => {
      const item = {
        author: {
          avatarPath: require("assets/images/profile-pic-may.jpg"),
          name: "Maynara F"
        },
        body:
          "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
        dateCreated: new Date("2019-01-01"),
        id: "21097",
        replies: [],
        title: "Meu pai fez o que ela mandou…",
        totalReplies: 0
      };
      const onPressComment = () => jest.fn();

      const component = shallow(
        <Replies item={item} onPressComment={onPressComment} />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
