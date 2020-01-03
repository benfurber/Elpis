import { YellowBox } from "react-native";

function ignoreWarnings() {
  return YellowBox.ignoreWarnings([
    "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead",
  ]);
}

export { ignoreWarnings };
