import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Tabs } from "../tabs";

describe("Tabs", () => {
  it("renders correctly", () => {
    const component = shallow(<Tabs />);

    expect(component).toMatchSnapshot();
  });
});
