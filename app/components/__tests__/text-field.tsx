import "react-native";
import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";

import { TextField } from "components";

describe("TextField", () => {
  it("renders correctly", () => {
    const buttonText = "The button";
    const inputText = "Add your text";
    const value = "Value";

    const component = shallow(
      <TextField
        buttonText={buttonText}
        inputText={inputText}
        onChangeText={() => jest.fn()}
        onSubmit={() => jest.fn()}
        value={value}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it("renders the labels correctly", () => {
    const buttonText = "The button";
    const inputText = "Add your text";
    const value = "Value";

    const component = shallow(
      <TextField
        buttonText={buttonText}
        inputText={inputText}
        onChangeText={() => jest.fn()}
        onSubmit={() => jest.fn()}
        value={value}
      />
    );

    const renderedChild = component.find(Text).shallow();

    expect(renderedChild.text()).toContain("The button");
  });
});
