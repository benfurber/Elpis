import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { CommunityContent } from "content";
import { UnwrappedStaticContentScreen } from "../static-content";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("StaticContentScreen", () => {
  it("renders correctly without optional props", () => {
    const component = shallow(
      <UnwrappedStaticContentScreen
        content={CommunityContent}
        navigation={navigation}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it("renders correctly with optional props", () => {
    const backToText = "Back to Menu";
    const title = "Title";

    const component = shallow(
      <UnwrappedStaticContentScreen
        backToText={backToText}
        content={CommunityContent}
        navigation={navigation}
        title={title}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
