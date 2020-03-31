import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";

import { comment, post } from "factories";

import { CommentsLoop } from "../comments-loop";

let navigation;

describe("Comments<CommentsLoop>", () => {
  describe("when there are comments", () => {
    it("renders correctly", () => {
      const header = <Text>Mock header</Text>;
      const noComments = "There are no comments :(";

      const component = shallow(
        <CommentsLoop
          comments={[comment]}
          header={header}
          navigation={navigation}
          noComments={noComments}
          postId={post.id}
          totalComments={2}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when there are no comments", () => {
    it("renders correctly", () => {
      const header = <Text>Mock header</Text>;
      const noComments = "There are no comments :(";

      const component = shallow(
        <CommentsLoop
          comments={[]}
          header={header}
          navigation={navigation}
          noComments={noComments}
          postId={post.id}
          totalComments={0}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
