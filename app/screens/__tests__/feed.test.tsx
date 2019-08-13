import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { FeedScreen } from "screens";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("FeedScreen", () => {
  it("renders correctly", () => {
    const component = shallow(<FeedScreen navigation={navigation} />);

    expect(component).toMatchSnapshot();
  });
});
