import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { comment, commentWithoutReplies } from "factories";
import { mockDateNow } from "../../../test-utils";

import { CommentPreview } from "../comment-preview";

let navigation;

describe("Comments<CommentPreview>", () => {
  describe("with replies", () => {
    it("renders correctly at discussionLevel 1", () => {
      mockDateNow("2019-01-01T20:04:23");

      const onPress = () => jest.fn();
      const postId = "213543";

      const component = shallow(
        <CommentPreview
          item={comment}
          onPress={onPress}
          navigation={navigation}
          postId={postId}
        />,
      );

      expect(component).toMatchSnapshot();
    });

    it("renders correctly at discussionLevel 2", () => {
      mockDateNow("2019-01-01T20:04:23");

      comment.discussionLevel = 2;

      const onPress = () => jest.fn();
      const postId = "213543";

      const component = shallow(
        <CommentPreview
          item={comment}
          onPress={onPress}
          navigation={navigation}
          postId={postId}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("without replies", () => {
    it("renders correctly", () => {
      mockDateNow("2019-01-01T00:09:00");

      const onPress = () => jest.fn();
      const postId = "927164";

      const component = shallow(
        <CommentPreview
          item={commentWithoutReplies}
          onPress={onPress}
          navigation={navigation}
          postId={postId}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
