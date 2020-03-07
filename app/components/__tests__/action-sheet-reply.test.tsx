import React from "react";
import { shallow } from "enzyme";

import { ActionSheetReply } from "components";
import { reply } from "factories";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("ActionSheetReply", () => {
  it("renders correctly", () => {
    const refProp = jest.fn();

    const component = shallow(
      <ActionSheetReply
        refProp={refProp}
        navigation={navigation}
        item={reply}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
