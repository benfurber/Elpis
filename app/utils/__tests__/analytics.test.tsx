import { Analytics } from "utils";

describe("Analytics", () => {
  const mixpanelMock = {
    createAlias: jest.fn(),
    identify: jest.fn(),
    sharedInstanceWithToken: jest.fn(() => Promise.resolve()),
    track: jest.fn(),
    trackWithProperties: jest.fn(),
  };
  Analytics.mockMixPanel(mixpanelMock);

  describe("callMixpanel", () => {
    it("provides the token ", async () => {
      const callback = jest.fn();
      await Analytics.callMixpanel(() => callback);
      expect(mixpanelMock.sharedInstanceWithToken).toHaveBeenCalled();
    });
  });

  describe("identifyUser", () => {
    it("sends the correct data to mixpanel", async () => {
      const userId = "bdf4weskwms12";
      await Analytics.identifyUser(userId);
      expect(mixpanelMock.identify).toHaveBeenCalledWith(userId);
    });
  });

  describe("registerUser", () => {
    it("sends the correct data to mixpanel", async () => {
      const userId = "db97425bs97ds1f";
      await Analytics.registerUser(userId);
      expect(mixpanelMock.createAlias).toHaveBeenCalledWith(userId);
    });
  });

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
      await Analytics.trackContent({ contentId, contentType });
      expect(mixpanelMock.trackWithProperties).toHaveBeenCalledWith(
        contentType,
        {
          contentId,
        },
      );
    });
  });
});
