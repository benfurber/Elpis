import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { colours, layout } from "styles";
import { Badge, Icon } from "components";

import { Tab } from "./tab";

const iconSize = 30;

interface Props {
  onPressComments: () => void;
  onPressPost: () => void;
  display: string;
  totalComments: number;
}

const Tabs = (props: Props) => {
  const { display } = props;

  const tabBackground = tab => (tab === display ? styles.tabSelected : null);

  const iconColour = tab =>
    tab !== display ? colours.navyBlueDarkTransparentHigh : null;

  return (
    <View style={styles.tabs}>
      <Tab
        name="image"
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
  iconCentre: {
    alignSelf: "center",
  },
  iconRight: {
    alignSelf: "flex-end",
  },
  tabs: {
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
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
  borderRight: {
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 10,
    borderBottomWidth: 46,
    borderRightColor: "transparent",
    borderBottomColor: colours.whiteTransparent,
  },
  shiftContainer: {
    left: -5,
    flexDirection: "row",
    flex: 1,
  },
});

export { Tabs };
