import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { author, comment } from "../../../factories";
import { mockDateNow } from "../../../test-utils";

import { Reply } from "../reply";

describe("Comments<Reply>", () => {
  it("renders correctly", () => {
    mockDateNow("2019-01-02");

    const item = {
      author,
      content:
        "Meu pai também fez o mesmo. Logo depois que minha mãe pediu o divórcio porque sofria violência dentro de casa, ele pegou as malas, se mudou e sumiu no mundo. Nem faço mais questão de saber pra onde ele foi.",
      createdAt: new Date("2019-01-02"),
      id: "21098",
      comment,
    };

    const component = shallow(<Reply item={item} />);

    expect(component).toMatchSnapshot();
  });
});
