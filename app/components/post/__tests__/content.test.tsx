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

  describe("with markdown", () => {
    it("renders correctly", () => {
      mockDateNow("2000-01-02");

      const createdAt = new Date("2000-01-01");
      const content = `# h1 Heading 8-\n
      | Option | Description |\n
      | ------ | ----------- |\n
      | data   | path to data files to supply the data that will be passed into templates. |\n
      | engine | engine to be used for processing templates. Handlebars is the default. |\n
      | ext    | extension to be used for dest files. |\n`;
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
});
