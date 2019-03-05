import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { FeedScreen } from "screens";

describe("FeedScreen", () => {
  it("renders correctly", () => {
    const component = shallow(<FeedScreen />);

    expect(component).toMatchSnapshot();
  });
});
