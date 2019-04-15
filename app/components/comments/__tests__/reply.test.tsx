import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Reply } from "../reply";

describe("Comments<Reply>", () => {
  it("renders correctly", () => {
    const item = {
      author: {
        avatarPath: require("assets/images/profile-pic-annon.png"),
        name: "Kelli S"
      },
      body:
        "Meu pai também fez o mesmo. Logo depois que minha mãe pediu o divórcio porque sofria violência dentro de casa, ele pegou as malas, se mudou e sumiu no mundo. Nem faço mais questão de saber pra onde ele foi.",
      dateCreated: new Date("2019-01-02"),
      id: "21098"
    };

    const component = shallow(<Reply item={item} />);

    expect(component).toMatchSnapshot();
  });
});
