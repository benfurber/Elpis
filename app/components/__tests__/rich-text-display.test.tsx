import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { RichTextDisplay } from "components";
import { author, comment } from "factories";
import { mockDateNow } from "../../test-utils";

let navigation;
jest.mock(navigation, () => jest.fn());

describe("RichTextDisplay", () => {
  it("renders correctly without a link", () => {
    mockDateNow("2019-01-02");

    const item = {
      author,
      comment,
      content:
        "Meu pai também fez o mesmo. Logo depois que minha mãe pediu o divórcio porque sofria violência dentro de casa, ele pegou as malas, se mudou e sumiu no mundo. Nem faço mais questão de saber pra onde ele foi.",
      id: "21098",
      link: null,
      publishedAt: new Date("2019-01-02"),
    };

    const component = shallow(
      <RichTextDisplay item={item} navigation={navigation} />,
    );

    expect(component).toMatchSnapshot();
  });

  it("renders correctly with a link", () => {
    mockDateNow("2019-01-02");

    const item = {
      author,
      comment,
      content:
        "Meu pai também fez o mesmo. Logo depois que minha mãe pediu o divórcio porque sofria violência dentro de casa, ele pegou as malas, se mudou e sumiu no mundo. Nem faço mais questão de saber pra onde ele foi.",
      id: "21098",
      link: "https://www.bbc.co.uk/news/business-50656178",
      publishedAt: new Date("2019-01-02"),
    };

    const component = shallow(
      <RichTextDisplay item={item} navigation={navigation} />,
    );

    expect(component).toMatchSnapshot();
  });
});
