import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { AuthorInfo } from "components";
import { comment } from "factories";
import { mockDateNow } from "../../test-utils";

let navigation;

describe("AuthorInfo", () => {
  it("renders correctly", () => {
    mockDateNow("2020-02-01T20:04:23");

    const component = shallow(
      <AuthorInfo item={comment} navigation={navigation} />,
    );

    expect(component).toMatchSnapshot();
  });
});
