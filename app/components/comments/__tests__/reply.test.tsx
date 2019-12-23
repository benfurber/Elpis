import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { reply } from "factories";
import { Reply } from "../reply";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("Comments<Reply>", () => {
  it("renders correctly", () => {
    const component = shallow(<Reply item={reply} navigation={navigation} />);

    expect(component).toMatchSnapshot();
  });
});
