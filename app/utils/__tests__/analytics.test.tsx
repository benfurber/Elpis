import { Analytics } from "utils";

describe("Analytics", () => {
  describe("track", () => {
    it("sends the correct event to mixpanel", async () => {
      const mixpanelMock = {
        sharedInstanceWithToken: jest.fn(() => Promise.resolve()),
        track: jest.fn(),
      };
      Analytics.mockMixPanel(mixpanelMock);

      const event = "Launched";
      await Analytics.track(event);
      expect(mixpanelMock.track).toHaveBeenCalledWith(event);
    });
  });
});
