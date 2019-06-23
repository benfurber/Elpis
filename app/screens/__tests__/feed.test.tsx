import "react-native";
import React from "react";
import { shallow } from "enzyme";
import { MockedProvider } from "react-apollo/test-utils";

import { FeedScreen } from "screens";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("FeedScreen", () => {
  it("renders correctly", () => {
    const component = shallow(
      <MockedProvider mocks={mocks} addTypename={false}>
        <FeedScreen navigation={navigation} />
      </MockedProvider>,
    );

    expect(component).toMatchSnapshot();
  });
});
