import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { IconDiscussionLevel } from "components";

describe("IconNav", () => {
  describe("at level zero", () => {
    it("renders correctly", () => {
      const component = shallow(<IconDiscussionLevel level={0} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe("at level one", () => {
    it("renders correctly", () => {
      const component = shallow(<IconDiscussionLevel level={1} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe("at level two", () => {
    it("renders correctly", () => {
      const component = shallow(<IconDiscussionLevel level={2} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe("with optional props", () => {
    it("renders correctly", () => {
      const containerStyle = {
        borderTopRightRadius: 0,
      };
      const size = 25;

      const component = shallow(
        <IconDiscussionLevel
          containerStyle={containerStyle}
          level={0}
          size={size}
        />,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
