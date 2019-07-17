import { sendImage } from "utils";

describe("sendImage()", () => {
  it("returns the uri of an image", () => {
    const uri = "ph://0873425/2130-DGF-0382457/982";
    const image = {
      node: {
        image: {
          uri,
        },
      },
    };

    expect(sendImage(image)).toEqual(uri);
  });
});
