import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { community } from "factories";

import { UnwrappedCommunityProfileScreen } from "../community-profile";

let navigation;

describe("UserProfileScreen", () => {
  it("renders correctly when loading", () => {
    const communityId = community.id;

    const component = shallow(
      <UnwrappedCommunityProfileScreen
        navigation={navigation}
        communityId={communityId}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it("renders correctly when community is set", () => {
    const communityId = community.id;

    const component = shallow(
      <UnwrappedCommunityProfileScreen
        navigation={navigation}
        communityId={communityId}
      />,
    );
    component.setState({ isLoading: false, user: community });
    expect(component).toMatchSnapshot();
  });
});
