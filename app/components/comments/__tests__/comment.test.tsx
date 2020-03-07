import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { comment } from "factories";
import { mockDateNow } from "../../../test-utils";

import { Comment } from "../comment";

let navigation;

describe("Comments<Comment>", () => {
  describe("with replies", () => {
    it("renders correctly", () => {
      mockDateNow("2019-01-01T20:04:23");

      const postId = "213543";

      const component = shallow(
        <Comment item={comment} navigation={navigation} postId={postId} />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
