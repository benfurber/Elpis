import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Body } from "../body";

import { mockDateNow } from "../../../test-utils";

describe("Post<Body>", () => {
  it("renders correctly", () => {
    mockDateNow("2000-01-02");

    const date = new Date("2000-01-01");
    const description = "A string";
    const imagePath = "assets/images/image_post_1.jpg";

    const component = shallow(
      <Body
        date={date}
        description={description}
        imagePath={require(imagePath)}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
