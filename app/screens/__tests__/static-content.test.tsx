import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { StaticContentScreen } from "screens";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("StaticContentScreen", () => {
  it("renders correctly", () => {
    const component = shallow(<StaticContentScreen navigation={navigation} />);

    expect(component).toMatchSnapshot();
  });
});
