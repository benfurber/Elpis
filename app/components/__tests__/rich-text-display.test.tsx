import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { RichTextDisplay } from "components";
import { reply } from "factories";
import { mockDateNow } from "../../test-utils";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("RichTextDisplay", () => {
  it("renders correctly without a link", () => {
    mockDateNow("2019-01-02");

    const component = shallow(
      <RichTextDisplay item={reply} navigation={navigation} />,
    );

    expect(component).toMatchSnapshot();
  });

  it("renders correctly with a link", () => {
    mockDateNow("2019-01-02");

    reply.link = "https://www.bbc.co.uk/news/business-50656178";

    const component = shallow(
      <RichTextDisplay item={reply} navigation={navigation} />,
    );

    expect(component).toMatchSnapshot();
  });
});
