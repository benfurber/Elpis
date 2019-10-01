import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { NoContent } from "components";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("NoContent", () => {
  it("renders correctly", () => {
    const component = shallow(<NoContent navigation={navigation} />);

    expect(component).toMatchSnapshot();
  });
});
