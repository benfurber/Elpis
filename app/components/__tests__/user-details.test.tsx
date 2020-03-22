import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { user } from "factories";
import { UserDetails } from "components";

let navigation;

describe("UserDetails", () => {
  it("renders correctly", () => {
    const component = shallow(
      <UserDetails navigation={navigation} user={user} />,
    );

    expect(component).toMatchSnapshot();
  });
});
