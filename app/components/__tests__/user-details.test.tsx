import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { author } from "factories";

import { UserDetails } from "components";

describe("UserDetails", () => {
  it("renders correctly", () => {
    const component = shallow(<UserDetails user={author} />);

    expect(component).toMatchSnapshot();
  });
});
