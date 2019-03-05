import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Body } from "../body";

describe("Body", () => {
  it("renders correctly", () => {
    const date = new Date("2000-01-01");
    const description = "A string";
    const imagePath = require("assets/images/image_post_1.jpg");

    const component = shallow(
      <Body date={date} description={description} imagePath={imagePath} />
    );

    expect(component).toMatchSnapshot();
  });
});
