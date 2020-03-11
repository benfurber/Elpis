import { Text } from "react-native";
import React from "react";
import { shallow } from "enzyme";

import { FormContainerScreen } from "screens";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("AddReplyScreen", () => {
  it("renders correctly", () => {
    const component = shallow(
      <FormContainerScreen
        analyticsContent={{ contentId: "324234", contentType: "AddReply" }}
        buttonDisplay={true}
        navigation={navigation}
        onSubmitEditing={() => jest.fn()}
        title={"Important Form"}
      >
        <Text>Important Form contents</Text>
      </FormContainerScreen>,
    );

    expect(component).toMatchSnapshot();
  });
});
