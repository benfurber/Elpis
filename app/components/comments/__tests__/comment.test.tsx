import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Comment } from "../comment";

import { mockDateNow } from "../../../test-utils";

describe("Comments<Comment>", () => {
  describe("with replies", () => {
    it("renders correctly", () => {
      mockDateNow("2019-01-01T20:04:23");

      const reply = {
        author: {
          avatarPath: require("assets/images/profile-pic-may.jpg"),
          name: "Benita F",
        },
        content: "Nao.",
        createdAt: new Date("2019-01-01"),
        id: "21097",
      };
      const comment = {
        author: {
          avatarPath: require("assets/images/profile-pic-may.jpg"),
          name: "May F",
        },
        content:
          "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
        createdAt: new Date("2019-01-01"),
        id: "21097",
        totalReplies: 1,
        replies: [reply],
      };
      const onPress = () => jest.fn();

      const component = shallow(<Comment item={comment} onPress={onPress} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe("without replies", () => {
    it("renders correctly", () => {
      mockDateNow("2019-01-01T00:09:00");

      const comment = {
        author: {
          avatarPath: require("assets/images/profile-pic-may.jpg"),
          name: "May F",
        },
        content:
          "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
        createdAt: new Date("2019-01-01"),
        id: "21097",
        totalReplies: 0,
        replies: [],
      };
      const onPress = () => jest.fn();

      const component = shallow(<Comment item={comment} onPress={onPress} />);

      expect(component).toMatchSnapshot();
    });
  });
});
