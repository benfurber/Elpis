import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { FeedbackScreen } from "screens";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("FeedbackScreen", () => {
  it("renders correctly", () => {
    const component = shallow(<FeedbackScreen navigation={navigation} />);

    expect(component).toMatchSnapshot();
  });
});
