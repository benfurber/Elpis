import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { author } from "factories";

import { UnwrappedUserProfileScreen } from "../user-profile";

let navigation;

describe("UserProfileScreen", () => {
  it("renders correctly when loading", () => {
    const userId = author.id;

    const component = shallow(
      <UnwrappedUserProfileScreen navigation={navigation} userId={userId} />,
    );

    expect(component).toMatchSnapshot();
  });

  it("renders correctly when user is set", () => {
    const userId = author.id;

    const component = shallow(
      <UnwrappedUserProfileScreen navigation={navigation} userId={userId} />,
    );
    component.setState({ isLoading: false, user: author });
    expect(component).toMatchSnapshot();
  });
});
