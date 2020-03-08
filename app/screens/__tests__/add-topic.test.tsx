import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { comment } from "factories";
import { UnwrappedAddTopicScreen } from "../add-topic";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("AddReplyScreen", () => {
  it("renders correctly", () => {
    const component = shallow(
      <UnwrappedAddTopicScreen navigation={navigation} postId={"2332r"} />,
    );

    expect(component).toMatchSnapshot();
  });

  it("renders correctly with currentComment", () => {
    const { content, id, title } = comment;
    const currentComment = {
      content,
      id,
      title,
    };
    const component = shallow(
      <UnwrappedAddTopicScreen
        currentComment={currentComment}
        navigation={navigation}
        postId={"2332r"}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
