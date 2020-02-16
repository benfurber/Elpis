import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Footer } from "../footer";

import { author } from "factories";

describe("Post<Footer>", () => {
  it("renders correctly", () => {
    const component = shallow(<Footer author={author} />);

    expect(component).toMatchSnapshot();
  });
});
