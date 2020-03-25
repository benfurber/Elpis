import React from "react";
import { View } from "react-native";
import { shallow } from "enzyme";

import { Badge } from "components";

describe("Icon", () => {
  describe("when given a number larger than zero", () => {
    it("renders correctly", () => {
      const component = shallow(
        <View>
          <Badge left={5} number={3} />
        </View>,
      );

      expect(component).toMatchSnapshot();
    });

    it("renders correctly when static display", () => {
      const component = shallow(
        <View>
          <Badge left={5} number={8} staticPosition />
        </View>,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when given zero", () => {
    it("renders null", () => {
      const component = shallow(
        <View>
          <Badge left={15} number={0} />
        </View>,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when given custom colour", () => {
    it("renders null", () => {
      const component = shallow(
        <View>
          <Badge left={15} number={0} colour="rgb(208,2,27)" />
        </View>,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
