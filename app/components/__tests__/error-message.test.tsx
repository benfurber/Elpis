import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { ErrorMessage } from "components";

describe("ErrorMessage", () => {
  it("renders correctly", () => {
    const error = {
      message: "ERROR PANIC!",
    };

    const component = shallow(<ErrorMessage error={error} />);

    expect(component).toMatchSnapshot();
  });
});
