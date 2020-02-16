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
  const iconColour = selected ? null : colours.mediumGrey;

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
    borderLeft: {
      backgroundColor: "transparent",
      borderLeftColor: "transparent",
      borderLeftWidth: 10,
      borderStyle: "solid",
      borderTopColor: backgroundColor,
      borderTopWidth: 46,
    },
    borderRight: {
      backgroundColor: "transparent",
      borderBottomColor: backgroundColor,
      borderBottomWidth: 46,
      borderRightColor: "transparent",
      borderRightWidth: 10,
      borderStyle: "solid",
    },
    iconCentre: {
      alignSelf: "center",
    },
    shiftContainer: {
      flex: 1,
      flexDirection: "row",
      left: first ? 0 : -5,
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
