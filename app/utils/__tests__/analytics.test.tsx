import { Analytics } from "utils";

describe("Analytics", () => {
  const mixpanelMock = {
    sharedInstanceWithToken: jest.fn(() => Promise.resolve()),
    track: jest.fn(),
    trackWithProperties: jest.fn(),
  };
  Analytics.mockMixPanel(mixpanelMock);

  describe("track", () => {
    it("sends the correct event to mixpanel", async () => {
      const event = "Launched";
      await Analytics.track(event);
      expect(mixpanelMock.track).toHaveBeenCalledWith(event);
    });
  });

  describe("trackContent", () => {
    it("sends the correct data to mixpanel", async () => {
      const contentType = "Comments";
      const contentId = "222";
      await Analytics.trackContent({ contentType, contentId });
      expect(mixpanelMock.trackWithProperties).toHaveBeenCalledWith(
        contentType,
        {
          contentId,
        },
      );
    });
  });
});
