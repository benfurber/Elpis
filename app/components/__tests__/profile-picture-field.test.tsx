import "react-native";
import React from "react";
import { shallow } from "enzyme";
import { MockedProvider } from "@apollo/react-testing";

import { ProfilePictureField } from "components";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("ProfilePictureField", () => {
  describe("when in active state", () => {
    it("renders correctly", () => {
      const component = shallow(
        <MockedProvider>
          <ProfilePictureField
            clearUploadCondition={() => jest.fn()}
            display={"active"}
            image={null}
            navigation={navigation}
            sendImage={() => jest.fn()}
            setImage={() => jest.fn()}
          />
        </MockedProvider>,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when in error state", () => {
    it("renders correctly", () => {
      const component = shallow(
        <MockedProvider>
          <ProfilePictureField
            clearUploadCondition={() => jest.fn()}
            display={"error"}
            image={null}
            navigation={navigation}
            sendImage={() => jest.fn()}
            setImage={() => jest.fn()}
          />
        </MockedProvider>,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
