import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { PostScreen } from "screens";

const post = {
  author: {
    avatarPath: require("assets/images/empower_two_women_logo.png")
  },
  date: new Date("2000-01-01"),
  description: "A string",
  id: "10387-314fs-12asdbj",
  imagePath: require("assets/images/image_post_1.jpg")
};

let navigation;
jest.mock(navigation, () => jest.fn());

describe("PostScreen", () => {
  it("renders correctly", () => {
    const component = shallow(<PostScreen navigation={navigation} />);

    expect(component).toMatchSnapshot();
  });
});
