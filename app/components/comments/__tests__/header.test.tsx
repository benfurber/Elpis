import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { comment } from "../../../factories";

import { Header } from "../header";

describe("Comments<Header>", () => {
  describe("with comments", () => {
    it("renders correctly", () => {
      const comments = [comment];
      const content = "Article description";

      const component = shallow(
        <Header comments={comments} content={content} />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("without comments", () => {
    it("renders correctly", () => {
      const comments = [];
      const content = "A slightly longer article description";

      const component = shallow(
        <Header comments={comments} content={content} />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("without description", () => {
    it("renders correctly", () => {
      const comments = [comment];

      const component = shallow(<Header comments={comments} content={null} />);

      expect(component).toMatchSnapshot();
    });
  });
});
