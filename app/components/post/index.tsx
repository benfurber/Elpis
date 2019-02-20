import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colours, layout } from "styles";
import { Icon } from "components";

interface Props {
  description: string;
}

const iconSize = 30;

const Post = (props: Props) => {
  const { description } = props;
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <View style={[styles.tabWithBackground, styles.tabSelected]}>
          <Icon name="palette" size={iconSize} style={styles.iconCentre} />
        </View>
        <View style={styles.tabWithBackground}>
          <Icon
            colour={colours.navyBlueDarkTransparentHigh}
            name="comments"
            size={iconSize}
            style={styles.iconCentre}
          />
        </View>
        <View style={styles.tabWithoutBackground}>
          <Icon
            name="ellipsis-h"
            size={iconSize - 5}
            style={styles.iconRight}
          />
        </View>
      </View>
      <View style={styles.body}>
        <Text>{description}</Text>
      </View>
      <View style={styles.footer} />
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
  body: {
    backgroundColor: colours.whiteTransparent,
    borderTopRightRadius: layout.borderRadius,
    padding: layout.padding,
    width: "100%"
  },
  container: {
    width: "100%"
  },
  iconCentre: {
    alignSelf: "center"
  },
  iconRight: {
    alignSelf: "flex-end"
  },
  footer: {
    backgroundColor: colours.navyBlueDark,
    borderBottomLeftRadius: layout.borderRadius,
    borderBottomRightRadius: layout.borderRadius,
    padding: layout.padding
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

export { Post };
