import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { author, comment } from "../../../factories";
import { mockDateNow } from "../../../test-utils";

import { Comment } from "../comment";

describe("Comments<Comment>", () => {
  describe("with replies", () => {
    it("renders correctly", () => {
      mockDateNow("2019-01-01T20:04:23");

      const onPress = () => jest.fn();

      const component = shallow(<Comment item={comment} onPress={onPress} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe("without replies", () => {
    it("renders correctly", () => {
      mockDateNow("2019-01-01T00:09:00");

      const comment = {
        author,
        content:
          "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
        id: "21097",
        publishedAt: new Date("2019-01-01"),
        replies: [],
        totalReplies: 0,
      };
      const onPress = () => jest.fn();

      const component = shallow(<Comment item={comment} onPress={onPress} />);

      expect(component).toMatchSnapshot();
    });
  });
});
