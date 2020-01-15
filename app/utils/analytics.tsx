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

  callMixpanel(callback: () => void) {
    this.mixPanel.sharedInstanceWithToken(this.token).then(callback);
  }

  identifyUser(userId: UserId) {
    this.callMixpanel(() => this.mixPanel.identify(userId));
  }

  registerUser(userId: UserId) {
    this.callMixpanel(() => this.mixPanel.createAlias(userId));
  }

  track(trackingEvent: string) {
    this.callMixpanel(() => this.mixPanel.track(trackingEvent));
  }

  trackContent({ contentType, contentId }: TrackContent) {
    this.callMixpanel(() =>
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
