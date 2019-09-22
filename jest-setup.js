import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {NativeModules} from "react-native";
import MockAsyncStorage from "mock-async-storage";

Enzyme.configure({adapter: new Adapter()});

Object.assign(NativeModules, {
  RNGestureHandlerModule: {
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
    State: {},
    Directions: {},
  },
  PlatformConstants: {
    forceTouchAvailable: false,
  },
});

jest.mock("react-native-mixpanel", () => ({
  sharedInstanceWithToken: jest.fn(() => Promise.resolve()),
  track: jest.fn(),
  trackWithProperties: jest.fn(),
}));

const mockImpl = new MockAsyncStorage();
jest.mock("@react-native-community/async-storage", () => mockImpl);
