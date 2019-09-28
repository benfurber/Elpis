import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { mockDateNow } from "../../test-utils";

import { Notification } from "components";

describe("Notification", () => {
  it("for comment type it renders correctly", () => {
    mockDateNow("2019-10-09");

    const commentNotification = {
      author: {
        name: "May",
        avatarPath: "",
      },
      content:
        "Lucas ipsum dolor sit amet organa c-3p0 hutt anakin ponda biggs yoda moff jinn solo. Mara fisto yoda ben jade. Mace ben wedge jinn leia luke. Moff solo obi-wan antilles grievous lando mandalore.",
      date: new Date("2019-09-23T03:24:00"),
      type: "comment",
    };

    const component = shallow(<Notification item={commentNotification} />);

    expect(component).toMatchSnapshot();
  });
  it("for post type it renders correctly", () => {
    mockDateNow("2019-10-09");

    const postNotification = {
      author: {
        name: "E2M",
        avatarPath: "",
      },
      content:
        "Mara fisto yoda ben jade. Mace ben wedge jinn leia luke. Lando mandalore.",
      imagePath: "",
      date: new Date("2019-09-23"),
      type: "post",
    };

    const component = shallow(<Notification item={postNotification} />);

    expect(component).toMatchSnapshot();
  });
});
