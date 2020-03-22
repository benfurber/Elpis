import "react-native";
import React from "react";
import { shallow } from "enzyme";
import { MockedProvider } from "@apollo/react-testing";

import { user } from "factories";

import { ButtonEditProfileLink } from "components";

let navigation;

describe("ButtonEditProfileLink", () => {
  it("renders correctly", () => {
    const component = shallow(
      <MockedProvider>
        <ButtonEditProfileLink navigation={navigation} userId={user.id} />
      </MockedProvider>,
    );
    expect(component).toMatchSnapshot();
  });
});
