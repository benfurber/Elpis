import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { PostScreen } from "screens";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("PostScreen", () => {
  it("renders correctly", () => {
    const component = shallow(<PostScreen navigation={navigation} />);

    expect(component).toMatchSnapshot();
  });
});
