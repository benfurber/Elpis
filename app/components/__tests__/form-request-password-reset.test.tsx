import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { FormRequestPasswordReset } from "components";

let navigation;

describe("FormRequestPasswordReset", () => {
  it("renders correctly when empty", () => {
    const component = shallow(
      <FormRequestPasswordReset
        navigation={navigation}
        setRequestedState={() => jest.fn()}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it("renders correctly when email entered", () => {
    const component = shallow(
      <FormRequestPasswordReset
        navigation={navigation}
        setRequestedState={() => jest.fn()}
      />,
    );

    component.setState({ email: "me@me.com" });

    expect(component).toMatchSnapshot();
  });

  it("renders correctly when there's an error", () => {
    const component = shallow(
      <FormRequestPasswordReset
        navigation={navigation}
        setRequestedState={() => jest.fn()}
      />,
    );

    component.setState({ error: { message: "Email not found" } });

    expect(component).toMatchSnapshot();
  });
});
