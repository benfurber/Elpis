import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Reply } from "components";
import { reply } from "factories";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("Reply", () => {
  it("renders correctly", () => {
    const component = shallow(<Reply item={reply} navigation={navigation} />);

    expect(component).toMatchSnapshot();
  });

  it("renders correctly when edited", () => {
    reply.edited = true;
    const component = shallow(<Reply item={reply} navigation={navigation} />);

    expect(component).toMatchSnapshot();
  });
});
