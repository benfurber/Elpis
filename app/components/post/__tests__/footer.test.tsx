import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Footer } from "../footer";

describe("Footer", () => {
  it("renders correctly", () => {
    const component = shallow(
      <Footer
        avatarPath={require("assets/images/empower_two_women_logo.png")}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
