import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Header } from "../header";

describe("Comments<Header>", () => {
  describe("with description", () => {
    it("renders correctly", () => {
      const content = "Article description";
      const component = shallow(<Header content={content} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe("with title", () => {
    it("renders correctly", () => {
      const title = "Important post title";
      const component = shallow(<Header title={title} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe("without description", () => {
    it("doesn't render", () => {
      const component = shallow(<Header />);

      expect(component).toMatchSnapshot();
    });
  });
});
