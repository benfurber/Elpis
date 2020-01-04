import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { post } from "../../factories";
import { labels } from "labels";

import { UnwrappedPostScreen } from "../post";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("PostScreen", () => {
  describe("when post provided", () => {
    it("renders correctly", () => {
      const component = shallow(
        <UnwrappedPostScreen
          navigation={navigation}
          post={post}
          backToText={labels.back.toFeed}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when no post provided", () => {
    it("renders correctly", () => {
      const component = shallow(
        <UnwrappedPostScreen
          navigation={navigation}
          backToText={labels.back.toNotifications}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
