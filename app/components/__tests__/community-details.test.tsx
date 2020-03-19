import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { community } from "factories";
import { CommunityDetails } from "components";

let navigation;

describe("CommunityDetails", () => {
  it("renders correctly", () => {
    const component = shallow(
      <CommunityDetails navigation={navigation} community={community} />,
    );

    expect(component).toMatchSnapshot();
  });
});
