import Mixpanel from "react-native-mixpanel";
import { MIXPANEL_TOKEN } from "react-native-dotenv";

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

  mockMixPanel(mock) {
    this.mixPanel = mock;
  }
}

const analytics = new Analytics();

export { analytics as Analytics };
