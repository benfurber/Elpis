import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";

import { BackgroundModal } from "components";

describe("Icon", () => {
  it("renders correctly", () => {
    const component = shallow(
      <BackgroundModal>
        <Text>Any child component</Text>
      </BackgroundModal>,
    );

    expect(component).toMatchSnapshot();
  });
});
