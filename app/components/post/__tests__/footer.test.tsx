import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Footer } from "../footer";

import { community } from "factories";

let navigation;

describe("Post<Footer>", () => {
  it("renders correctly", () => {
    const component = shallow(
      <Footer community={community} navigation={navigation} />,
    );

    expect(component).toMatchSnapshot();
  });
});
