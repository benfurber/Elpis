import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { NoContent } from "../no-content";

describe("Comments<NoContent>", () => {
  it("renders correctly", () => {
    const component = shallow(<NoContent text={"No content to show!"} />);

    expect(component).toMatchSnapshot();
  });
});
