import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { colours, layout } from "styles";
import { Badge, Icon } from "components";

const iconSize = 30;

interface Props {
  onPressComments: () => void;
  onPressPost: () => void;
  display: string;
  totalComments: number;
}

const Tabs = (props: Props) => {
  const tabBackground = tab =>
    tab === props.display ? styles.tabSelected : null;

  const iconColour = tab =>
    tab !== props.display ? colours.navyBlueDarkTransparentHigh : null;

  return (
    <View style={styles.tabs}>
      <View style={[styles.tabWithBackground, tabBackground("body")]}>
        <TouchableOpacity onPress={props.onPressPost}>
          <Icon
            colour={iconColour("body")}
            name="image"
            size={iconSize}
            style={styles.iconCentre}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.tabWithBackground, tabBackground("comments")]}>
        <TouchableOpacity onPress={props.onPressComments}>
          <Badge left={52} number={props.totalComments} />
          <Icon
            colour={iconColour("comments")}
            name="comments"
            size={iconSize}
            style={styles.iconCentre}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabWithoutBackground}>
        <TouchableOpacity>
          <Icon
            name="ellipsis-h"
            size={iconSize - 5}
            style={styles.iconRight}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const tabs = {
  borderTopLeftRadius: layout.borderRadius,
  borderTopRightRadius: layout.borderRadius,
  flex: 1,
  marginRight: 2,
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
});

export { Tabs };
