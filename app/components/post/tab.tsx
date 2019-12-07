import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { colours } from "styles";
import { Badge, Icon } from "components";

const iconSize = 30;

interface Props {
  name: string;
  number: null | number;
  onPress: () => void;
  selected: boolean;
  first?: boolean;
}

const Tab = (props: Props) => {
  const { first, name, number, onPress, selected } = props;
  const { whiteTransparent, whiteTransparentHigh } = colours;

  const backgroundColor = selected ? whiteTransparent : whiteTransparentHigh;
  const iconColour = selected ? colours.navyBlueDarkTransparentHigh : null;

  const tabs = {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  };

  const styles = StyleSheet.create({
    background: {
      ...tabs,
      backgroundColor,
    },
    borderRight: {
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderRightWidth: 10,
      borderBottomWidth: 46,
      borderRightColor: "transparent",
      borderBottomColor: backgroundColor,
    },
    borderLeft: {
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderLeftWidth: 10,
      borderTopWidth: 46,
      borderLeftColor: "transparent",
      borderTopColor: backgroundColor,
    },
    iconCentre: {
      alignSelf: "center",
    },
    shiftContainer: {
      left: first ? 0 : -5,
      flexDirection: "row",
      flex: 1,
    },
  });

  return (
    <View style={styles.shiftContainer}>
      {!first && <View style={styles.borderLeft} />}
      <View style={styles.background}>
        <TouchableOpacity onPress={onPress}>
          <Badge left={52} number={number} />
          <Icon
            colour={iconColour}
            name={name}
            size={iconSize}
            style={styles.iconCentre}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.borderRight} />
    </View>
  );
};

export { Tab };
