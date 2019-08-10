import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Header } from "../header";

describe("Comments<Header>", () => {
  describe("with comments", () => {
    it("renders correctly", () => {
      const reply = {
        author: {
          avatarPath: "",
          name: "Benita F",
        },
        content: "Nao.",
        createdAt: new Date("2019-01-01"),
        id: "21097",
      };
      const comment = {
        author: {
          avatarPath: "",
          name: "May F",
        },
        content:
          "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
        createdAt: new Date("2019-01-01"),
        id: "21097",
        totalReplies: 1,
        replies: [reply],
      };

      const comments = [comment];
      const content = "Article description";

      const component = shallow(
        <Header comments={comments} content={content} />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("without comments", () => {
    it("renders correctly", () => {
      const comments = [];
      const content = "A slightly longer article description";

      const component = shallow(
        <Header comments={comments} content={content} />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("without description", () => {
    it("renders correctly", () => {
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

      const comments = [comment];

      const component = shallow(<Header comments={comments} content={null} />);

      expect(component).toMatchSnapshot();
    });
  });
});
