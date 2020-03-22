import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { community, user } from "factories";

import { UnwrappedUserProfileScreen } from "../user-profile";

let navigation;

describe("UserProfileScreen", () => {
  it("renders correctly when loading", () => {
    const userId = community.id;

    const component = shallow(
      <UnwrappedUserProfileScreen navigation={navigation} userId={userId} />,
    );

    expect(component).toMatchSnapshot();
  });

  it("renders correctly when user is set", () => {
    const userId = community.id;

    const component = shallow(
      <UnwrappedUserProfileScreen navigation={navigation} userId={userId} />,
    );
    component.setState({ isLoading: false, user });
    expect(component).toMatchSnapshot();
  });
});
