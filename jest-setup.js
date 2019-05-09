import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { NativeModules } from "react-native";

Enzyme.configure({ adapter: new Adapter() });

Object.assign(NativeModules, {
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
});
