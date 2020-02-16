import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Icon } from "components";

describe("Icon", () => {
  it("renders correctly", () => {
    const component = shallow(<Icon name="rocket" />);
    expect(component).toMatchSnapshot();
  });

  describe("custom icon", () => {
    it("renders correctly", () => {
      const component = shallow(<Icon name="custom-thumbs" />);
      expect(component).toMatchSnapshot();
    });
  });
});
