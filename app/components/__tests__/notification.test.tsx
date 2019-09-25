import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Notification } from "components";

describe("Logo", () => {
  it("renders correctly", () => {
    const component = shallow(<Notification />);

    expect(component).toMatchSnapshot();
  });
});
