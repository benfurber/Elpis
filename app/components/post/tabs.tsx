import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { colours, layout } from "styles";
import { Icon } from "components";

const iconSize = 30;

interface Props {
  onPressComments: () => any;
  onPressPost: () => any;
}

const Tabs = (props: Props) => {
  return (
    <View style={styles.tabs}>
      <View style={[styles.tabWithBackground, styles.tabSelected]}>
        <TouchableOpacity onPress={props.onPressPost}>
          <Icon name="palette" size={iconSize} style={styles.iconCentre} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabWithBackground}>
        <TouchableOpacity onPress={props.onPressComments}>
          <Icon
            colour={colours.navyBlueDarkTransparentHigh}
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
  paddingVertical: 8
};

const styles = StyleSheet.create({
  iconCentre: {
    alignSelf: "center"
  },
  iconRight: {
    alignSelf: "flex-end"
  },
  tabs: {
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%"
  },
  tabSelected: {
    backgroundColor: colours.whiteTransparent
  },
  tabWithBackground: {
    ...tabs,
    backgroundColor: colours.whiteTransparentHigh
  },
  tabWithoutBackground: {
    ...tabs
  }
});

export { Tabs };
