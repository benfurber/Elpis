import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Title } from "components";

describe("Title", () => {
  it("renders correctly", () => {
    const component = shallow(<Title text="I am a title" />);

    expect(component).toMatchSnapshot();
  });

  it("renders correctly at small size", () => {
    const component = shallow(<Title text="I am a sub-title" small />);

    expect(component).toMatchSnapshot();
  });
});
