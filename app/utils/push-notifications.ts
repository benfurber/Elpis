import OneSignal from "react-native-onesignal";
import { ONE_SIGNAL_ID } from "react-native-dotenv";

class PushNotifications {
  initialise() {
    return OneSignal.init(ONE_SIGNAL_ID, {
      kOSSettingsKeyAutoPrompt: false,
    });
  }
}

const pushNotifications = new PushNotifications();
export { pushNotifications };
