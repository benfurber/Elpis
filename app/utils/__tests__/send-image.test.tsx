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
    type: "string",
    // eslint-disable-next-line @typescript-eslint/camelcase
    group_name: "string",
    image: {
      filename: "string",
      uri: "string",
      height: 200,
      width: 300,
      playableDuration: 0,
    },
    timestamp: 86571234234,
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
    };

    try {
      sendImage(args);
    } catch (error) {
      expect(error).toBe("Problem");
    }
  });
});
