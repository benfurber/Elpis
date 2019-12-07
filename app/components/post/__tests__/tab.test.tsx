import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Tab } from "../tab";

describe("Post<Tabs>", () => {
  describe("first tab", () => {
    it("renders correctly when selected", () => {
      const component = shallow(
        <Tab
          name="image"
          onPress={() => jest.fn()}
          selected={true}
          number={null}
          first
        />,
      );
      expect(component).toMatchSnapshot();
    });

    it("renders correctly when not selected", () => {
      const component = shallow(
        <Tab
          name="image"
          onPress={() => jest.fn()}
          selected={false}
          number={null}
          first
        />,
      );
      expect(component).toMatchSnapshot();
    });
  });

  describe("a remaining tab", () => {
    it("renders correctly when selected", () => {
      const component = shallow(
        <Tab
          name="comments"
          onPress={() => jest.fn()}
          selected={true}
          number={23}
        />,
      );
      expect(component).toMatchSnapshot();
    });

    it("renders correctly when not selected", () => {
      const component = shallow(
        <Tab
          name="comments"
          onPress={() => jest.fn()}
          selected={false}
          number={23}
        />,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
