import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Content } from "../content";

import { mockDateNow } from "../../../test-utils";

describe("Post<Content>", () => {
  it("renders correctly", () => {
    mockDateNow("2000-01-02");

    const createdAt = new Date("2000-01-01");
    const content = "A string";
    const imagePath = "assets/images/image_post_1.jpg";

    const component = shallow(
      <Content
        createdAt={createdAt}
        content={content}
        imagePath={require(imagePath)}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
