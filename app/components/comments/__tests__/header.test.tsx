import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Header } from "../header";

describe("Comments<Header>", () => {
  describe("with comments", () => {
    it("renders correctly", () => {
      const reply = {
        author: {
          avatarPath: require("assets/images/profile-pic-may.jpg"),
          name: "Benita F"
        },
        body: "Nao.",
        dateCreated: new Date("2019-01-01"),
        id: "21097"
      };
      const comment = {
        author: {
          avatarPath: require("assets/images/profile-pic-may.jpg"),
          name: "May F"
        },
        body:
          "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
        dateCreated: new Date("2019-01-01"),
        id: "21097",
        title: "Meu pai fez o que ela mandou…",
        totalReplies: 1,
        replies: [reply]
      };

      const comments = [comment];
      const description = "Article description";

      const component = shallow(
        <Header comments={comments} description={description} />
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("without comments", () => {
    it("renders correctly", () => {
      const comments = [];
      const description = "A slightly longer article description";

      const component = shallow(
        <Header comments={comments} description={description} />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
