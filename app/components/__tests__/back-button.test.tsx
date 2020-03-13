import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { BackButton } from "components";

let navigation;

describe("BackButton", () => {
  describe("without a text prop", () => {
    it("renders correctly", () => {
      const component = shallow(<BackButton navigation={navigation} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe("with a text prop", () => {
    it("renders correctly", () => {
      const text = "Back to home";

      const component = shallow(
        <BackButton navigation={navigation} text={text} />,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
