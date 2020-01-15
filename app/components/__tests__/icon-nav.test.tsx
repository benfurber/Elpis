import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { IconNav } from "components";

describe("IconNav", () => {
  it("renders correctly when active", () => {
    const component = shallow(
      <IconNav action={() => null} isActive={true} name="chevron-right" />,
    );

    expect(component).toMatchSnapshot();
  });

  it("renders correctly when inactive", () => {
    const component = shallow(
      <IconNav action={() => null} isActive={false} name="chevron-left" />,
    );

    expect(component).toMatchSnapshot();
  });
});
