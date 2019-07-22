import { sendImage } from "utils";

let progress;
jest.mock("react-native-s3-upload", () => {
  return {
    RNS3: {
      put: jest.fn(() => ({
        progress,
      })),
    },
  };
});

describe("sendImage()", () => {
  it("returns a promise", () => {
    progress = jest.fn(() => {
      return Promise.resolve();
    });
    const selectedImage = { node: { image: {} } };

    const args = {
      selectedImage,
      setError: jest.fn(),
      setProgress: jest.fn(),
      setState: jest.fn(),
    };
    sendImage(args);

    expect(progress).toHaveBeenCalled();
  });

  it("returns an error when there's a problem", () => {
    progress = jest.fn(() => {
      return Promise.reject("Problem");
    });

    const selectedImage = { node: { image: {} } };

    const args = {
      selectedImage,
      setError: jest.fn(),
      setProgress: jest.fn(),
      setState: jest.fn(),
    };

    try {
      sendImage(args);
    } catch (error) {
      expect(error).toBe("Problem");
    }
  });
});
