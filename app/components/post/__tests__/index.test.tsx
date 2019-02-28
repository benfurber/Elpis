import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Post } from "components";

describe("Post", () => {
  it("renders correctly", () => {
    const post = {
      author: {
        avatarPath: require("assets/images/empower_two_women_logo.png")
      },
      date: new Date("2000-01-01"),
      description: "A string",
      imagePath: require("assets/images/image_post_1.jpg")
    };
    const component = shallow(<Post post={post} />);

    expect(component).toMatchSnapshot();
  });
});
