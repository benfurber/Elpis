import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { NotificationsScreen } from "screens";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("NotificationsScreen", () => {
  it("renders correctly", () => {
    const component = shallow(<NotificationsScreen navigation={navigation} />);

    expect(component).toMatchSnapshot();
  });
});
