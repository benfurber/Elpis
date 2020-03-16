import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { author } from "factories";
import { UserDetails } from "components";

let navigation;

describe("UserDetails", () => {
  it("renders correctly", () => {
    const component = shallow(
      <UserDetails navigation={navigation} user={author} />,
    );

    expect(component).toMatchSnapshot();
  });
});
