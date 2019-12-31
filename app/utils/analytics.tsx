import Mixpanel from "react-native-mixpanel";
import { MIXPANEL_TOKEN } from "react-native-dotenv";

type ContentTypes =
  | "AddReply"
  | "AddTopic"
  | "Comments"
  | "Onboarding"
  | "Replies"
  | "WebBrowser";

interface TrackContent {
  contentType: ContentTypes;
  contentId: string;
}

type UserId = string;

class Analytics {
  mixPanel: any;
  token: string;

  constructor() {
    this.token = MIXPANEL_TOKEN;
    this.mixPanel = Mixpanel;
  }

  registerUser(userId: UserId) {
    this.mixPanel
      .sharedInstanceWithToken(this.token)
      .then(() => this.mixPanel.createAlias(userId));
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
