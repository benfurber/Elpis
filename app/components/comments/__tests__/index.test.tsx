import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Comments } from "..";

describe("Comments", () => {
  it("renders correctly", () => {
    const comment = {
      author: {
        avatarPath: require("assets/images/profile-pic-may.jpg")
      },
      body:
        "Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena que a violência só piorou.",
      dateCreated: new Date("2019-01-01"),
      id: "21097",
      title: "Meu pai fez o que ela mandou…",
      totalReplies: 4
    };

    const component = shallow(
      <Comments comments={[comment]} description={"A simple string"} />
    );

    expect(component).toMatchSnapshot();
  });
});
