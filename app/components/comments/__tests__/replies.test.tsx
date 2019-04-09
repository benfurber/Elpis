import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Replies } from "../replies";

describe("Replies", () => {
  it("renders correctly", () => {
    const component = shallow(<Replies />);

    expect(component).toMatchSnapshot();
  });
});
