import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { NativeModules } from "react-native";
import MockAsyncStorage from "mock-async-storage";

Enzyme.configure({ adapter: new Adapter() });

Object.assign(NativeModules, {
  PlatformConstants: {
    forceTouchAvailable: false,
  },
  RNGestureHandlerModule: {
    Directions: {},
    State: {},
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
  },
});

jest.mock("bugsnag-react-native", () => ({
  Client: jest.fn(() => ({ notify: jest.fn() })),
  Configuration: jest.fn(),
}));

jest.mock("react-native-fs", () => ({
  fs: jest.fn(),
}));

let navigation;
jest.mock(navigation, () => jest.fn());

jest.mock("react-native-mixpanel", () => ({
  sharedInstanceWithToken: jest.fn(() => Promise.resolve()),
  track: jest.fn(),
  trackWithProperties: jest.fn(),
}));

const mockImpl = new MockAsyncStorage();
jest.mock("@react-native-community/async-storage", () => mockImpl);

// RN 0.61 bug: https://github.com/facebook/react-native/issues/26710
jest.mock(
  "react-native/Libraries/Utilities/NativePlatformConstantsIOS",
  () => ({
    ...require.requireActual(
      "react-native/Libraries/Utilities/NativePlatformConstantsIOS",
    ),
    getConstants: () => ({
      forceTouchAvailable: false,
      interfaceIdiom: "en",
      isTesting: false,
      osVersion: "ios",
      reactNativeVersion: { major: 60, minor: 1, patch: 0 },
      systemName: "ios",
    }),
  }),
);
