import "react-native";
import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";

import { TextField } from "components";

describe("TextField", () => {
  it("renders correctly when editable", () => {
    const buttonText = "The button";
    const inputText = "Add your text";
    const value = "Value";

    const component = shallow(
      <TextField
        buttonText={buttonText}
        editable={true}
        inputText={inputText}
        onChangeText={() => jest.fn()}
        onSubmit={() => jest.fn()}
        value={value}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it("renders correctly when uneditable", () => {
    const buttonText = "The button";
    const inputText = "Add your text";
    const value = "Value";

    const component = shallow(
      <TextField
        buttonText={buttonText}
        editable={false}
        inputText={inputText}
        onChangeText={() => jest.fn()}
        onSubmit={() => jest.fn()}
        value={value}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
