import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Avatar } from "components";

let navigation;

describe("Avatar", () => {
  const avatarPath =
    "https://elpis-profile-images.s3-sa-east-1.amazonaws.com/uploads/profile-pic-may.jpg";

  describe("renders sizes correctly", () => {
    it("the default", () => {
      const component = shallow(<Avatar avatarPath={avatarPath} />);
      expect(component).toMatchSnapshot();
    });
    it("extra small", () => {
      const component = shallow(<Avatar avatarPath={avatarPath} size="xs" />);
      expect(component).toMatchSnapshot();
    });
    it("small", () => {
      const component = shallow(
        <Avatar avatarPath={avatarPath} size="small" />,
      );
      expect(component).toMatchSnapshot();
    });
    it("medium", () => {
      const component = shallow(
        <Avatar avatarPath={avatarPath} size="medium" />,
      );
      expect(component).toMatchSnapshot();
    });
    it("large", () => {
      const component = shallow(
        <Avatar avatarPath={avatarPath} size="large" />,
      );
      expect(component).toMatchSnapshot();
    });
    it("xl", () => {
      const component = shallow(<Avatar avatarPath={avatarPath} size="xl" />);
      expect(component).toMatchSnapshot();
    });
    it("feature", () => {
      const component = shallow(
        <Avatar avatarPath={avatarPath} size="feature" />,
      );
      expect(component).toMatchSnapshot();
    });
  });

  it("renders no path correctly", () => {
    const component = shallow(<Avatar avatarPath={null} />);
    expect(component).toMatchSnapshot();
  });

  it("renders with navigation and userId", () => {
    const userId = "297tguhjbsda";

    const component = shallow(
      <Avatar
        avatarPath={avatarPath}
        userId={userId}
        navigation={navigation}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
