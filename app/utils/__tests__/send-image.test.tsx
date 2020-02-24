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

const mockPhotoIdentifier = {
  node: {
    group_name: "string",
    image: {
      filename: "string",
      height: 200,
      playableDuration: 0,
      uri: "string",
      width: 300,
    },
    timestamp: 86571234234,
    type: "string",
  },
};

describe("sendImage()", () => {
  it("returns a promise", () => {
    progress = jest.fn(() => {
      return Promise.resolve();
    });
    const selectedImage = mockPhotoIdentifier;

    const args = {
      selectedImage,
      setError: jest.fn(),
      setProgress: jest.fn(),
      setState: jest.fn(),
      userId: "213sfg4225",
    };
    sendImage(args);

    expect(progress).toHaveBeenCalled();
  });

  it("returns an error when there's a problem", () => {
    progress = jest.fn(() => {
      return Promise.reject("Problem");
    });

    const selectedImage = mockPhotoIdentifier;

    const args = {
      selectedImage,
      setError: jest.fn(),
      setProgress: jest.fn(),
      setState: jest.fn(),
      userId: "213sfg4225",
    };

    try {
      sendImage(args);
    } catch (error) {
      expect(error).toBe("Problem");
    }
  });
});
