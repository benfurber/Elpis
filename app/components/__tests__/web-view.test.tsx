import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { WebView } from "components";

describe("WebView", () => {
  it("renders correctly", () => {
    const component = shallow(<WebView uri="http://bbc.co.uk/" />);

    expect(component).toMatchSnapshot();
  });
});
