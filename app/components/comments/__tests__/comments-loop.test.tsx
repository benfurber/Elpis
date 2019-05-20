import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";

import { CommentsLoop } from "../comments-loop";

describe("Comments<CommentsLoop>", () => {
  describe("when there are comments", () => {
    it("renders correctly", () => {
      const comment = {
        author: {
          avatarPath: require("assets/images/profile-pic-may.jpg"),
          name: "May F",
        },
        body:
          "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
        dateCreated: new Date("2019-01-01"),
        id: "21097",
        replies: [],
        title: "Meu pai fez o que ela mandou…",
        totalReplies: 0,
      };
      const header = <Text>Mock header</Text>;
      const noComments = "There are no comments :(";
      const onPress = number => jest.fn(number);

      const component = shallow(
        <CommentsLoop
          comments={[comment]}
          header={header}
          noComments={noComments}
          onPress={onPress}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when there are no comments", () => {
    it("renders correctly", () => {
      const header = <Text>Mock header</Text>;
      const noComments = "There are no comments :(";
      const onPress = number => jest.fn(number);

      const component = shallow(
        <CommentsLoop
          comments={[]}
          header={header}
          noComments={noComments}
          onPress={onPress}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
