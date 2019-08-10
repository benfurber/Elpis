import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Avatar } from "components";

describe("Avatar", () => {
  describe("renders sizes correctly", () => {
    const path =
      "https://elpis-profile-images.s3-sa-east-1.amazonaws.com/uploads/profile-pic-may.jpg";

    it("the default", () => {
      const component = shallow(<Avatar avatarPath={path} />);
      expect(component).toMatchSnapshot();
    });
    it("small", () => {
      const component = shallow(<Avatar avatarPath={path} size="small" />);
      expect(component).toMatchSnapshot();
    });
    it("medium", () => {
      const component = shallow(<Avatar avatarPath={path} size="medium" />);
      expect(component).toMatchSnapshot();
    });
    it("large", () => {
      const component = shallow(<Avatar avatarPath={path} size="large" />);
      expect(component).toMatchSnapshot();
    });
    it("xl", () => {
      const component = shallow(<Avatar avatarPath={path} size="xl" />);
      expect(component).toMatchSnapshot();
    });
    it("feature", () => {
      const component = shallow(<Avatar avatarPath={path} size="feature" />);
      expect(component).toMatchSnapshot();
    });
  });

  it("renders no path correctly", () => {
    const component = shallow(<Avatar avatarPath={null} />);
    expect(component).toMatchSnapshot();
  });
});
