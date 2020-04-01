import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { comment, post } from "factories";
import { Comments } from "..";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("Comments", () => {
  describe("when there are comments", () => {
    it("renders correctly", () => {
      const postForTest = {
        ...post,
        comments: [comment],
      };

      const component = shallow(
        <Comments
          post={postForTest}
          navigation={navigation}
          setCommentId={() => jest.fn()}
          totalComments={2}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when there are no comments", () => {
    it("renders correctly", () => {
      const component = shallow(
        <Comments
          post={post}
          navigation={navigation}
          setCommentId={() => jest.fn()}
          totalComments={0}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
