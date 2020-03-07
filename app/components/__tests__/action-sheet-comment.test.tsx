import React from "react";
import { shallow } from "enzyme";

import { ActionSheetComment } from "components";
import { comment } from "factories";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("ActionSheetComment", () => {
  it("renders correctly", () => {
    const postId = "12345";
    const refProp = jest.fn();

    const component = shallow(
      <ActionSheetComment
        item={comment}
        navigation={navigation}
        postId={postId}
        refProp={refProp}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
