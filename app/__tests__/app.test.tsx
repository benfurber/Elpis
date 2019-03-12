import "react-native";
import React from "react";
import { shallow } from "enzyme";

import App from "../app";

// Manual mock required to fix jest issue
// https://github.com/kmagiera/react-native-gesture-handler/issues/344
jest.mock("NativeModules", () => ({
  UIManager: {
    RCTView: () => ({
      directEventTypes: {}
    })
  },
  KeyboardObserver: {},
  RNGestureHandlerModule: {
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
    State: {},
    Directions: {}
  },
  PlatformConstants: {
    forceTouchAvailable: false
  }
}));

describe("App", () => {
  it("renders correctly", () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});
