import React from "react";
import { StyleSheet, View } from "react-native";

import { colours } from "styles";

import { Tab } from "./tab";

interface Props {
  onPressComments: () => void;
  onPressPost: () => void;
  display: string;
  totalComments: number;
}

const Tabs = (props: Props) => {
  const { display } = props;

  return (
    <View style={styles.tabs}>
      <Tab
        name="elementor"
        onPress={props.onPressPost}
        selected={"body" === display}
        number={null}
        first
      />
      <Tab
        name="comments"
        onPress={props.onPressComments}
        selected={"comments" === display}
        number={props.totalComments}
      />
      <View style={styles.tabWithoutBackground}></View>
    </View>
  );
};

const tabs = {
  flex: 1,
  paddingHorizontal: 16,
  paddingVertical: 8,
};

const styles = StyleSheet.create({
  borderRight: {
    backgroundColor: "transparent",
    borderBottomColor: colours.whiteTransparent,
    borderBottomWidth: 46,
    borderRightColor: "transparent",
    borderRightWidth: 10,
    borderStyle: "solid",
  },
  iconCentre: {
    alignSelf: "center",
  },
  iconRight: {
    alignSelf: "flex-end",
  },
  shiftContainer: {
    flex: 1,
    flexDirection: "row",
    left: -5,
  },
  tabSelected: {
    backgroundColor: colours.whiteTransparent,
  },
  tabWithBackground: {
    ...tabs,
    backgroundColor: colours.whiteTransparentHigh,
  },
  tabWithoutBackground: {
    ...tabs,
  },
  tabs: {
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
});

export { Tabs };
