import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Comment } from "components";
import { comment } from "factories";
import { mockDateNow } from "../../test-utils";

let navigation;

describe("Comment", () => {
  it("renders correctly", () => {
    mockDateNow("2019-01-01T20:04:23");

    const component = shallow(
      <Comment item={comment} navigation={navigation} />,
    );

    expect(component).toMatchSnapshot();
  });

  it("renders correctly when edited", () => {
    mockDateNow("2019-01-01T20:04:23");

    comment.edited = true;

    const component = shallow(
      <Comment item={comment} navigation={navigation} />,
    );

    expect(component).toMatchSnapshot();
  });
});
