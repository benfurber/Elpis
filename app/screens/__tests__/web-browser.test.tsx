import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { UnwrappedWebBrowserScreen } from "../web-browser";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("WebBrowser", () => {
  it("renders correctly", () => {
    const component = shallow(
      <UnwrappedWebBrowserScreen
        navigation={navigation}
        uri="https://www.bbc.co.uk/news"
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
