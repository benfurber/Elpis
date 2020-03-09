import { Client } from "bugsnag-react-native";
import { BUGSNAG_ID } from "react-native-dotenv";

const bugTracker = new Client(BUGSNAG_ID);

export { bugTracker };
