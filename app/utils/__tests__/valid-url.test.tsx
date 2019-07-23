import { validURL } from "utils";

describe("validURL", () => {
  it("returns true when the string provided is a URL", () => {
    const url = "http://bbc.co.uk/";

    const response = validURL(url);

    expect(response).toEqual(true);
  });

  it("returns false when the string provided is not a URL", () => {
    const notURL = "hi there";

    const response = validURL(notURL);

    expect(response).toEqual(false);
  });
});
