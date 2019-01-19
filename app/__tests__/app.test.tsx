import "react-native";
import React from "react";
import { shallow } from "enzyme";

import App from "../app";

describe("App", () => {
  it("renders correctly", () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});
