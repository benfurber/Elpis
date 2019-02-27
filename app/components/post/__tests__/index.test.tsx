import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Post } from "components";

describe("Post", () => {
  it("renders correctly", () => {
    const author = {
      avatarPath: require("../../../assets/images/empower_two_women_logo.png")
    };
    const post = {
      description: "A string",
      imagePath: require("../../../assets/images/image_post_1.jpg")
    };
    const component = shallow(<Post author={author} post={post} />);

    expect(component).toMatchSnapshot();
  });
});
