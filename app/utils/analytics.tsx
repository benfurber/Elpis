import Mixpanel from "react-native-mixpanel";
import { MIXPANEL_TOKEN } from "react-native-dotenv";

type ContentTypes =
  | "AddReply"
  | "AddTopic"
  | "Comments"
  | "Onboarding"
  | "Replies";

interface TrackContent {
  contentType: ContentTypes;
  contentId: string;
}
class Analytics {
  token: string;
  mixPanel: any;

  constructor() {
    this.token = MIXPANEL_TOKEN;
    this.mixPanel = Mixpanel;
  }

  track(trackingEvent: string) {
    this.mixPanel
      .sharedInstanceWithToken(this.token)
      .then(() => this.mixPanel.track(trackingEvent));
  }

  trackContent({ contentType, contentId }: TrackContent) {
    this.mixPanel.sharedInstanceWithToken(this.token).then(() =>
      this.mixPanel.trackWithProperties(contentType, {
        contentId,
      }),
    );
  }

  mockMixPanel(mock) {
    this.mixPanel = mock;
  }
}

const analytics = new Analytics();

export { analytics as Analytics, ContentTypes as AnalyticsContentTypes };
