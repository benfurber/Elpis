import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { NotificationScreen } from "screens";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("NotificationScreen", () => {
  it("renders correctly", () => {
    const component = shallow(<NotificationScreen navigation={navigation} />);

    expect(component).toMatchSnapshot();
  });
});
