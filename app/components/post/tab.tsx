import React from "react";
import { StyleSheet, View } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

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

  const styles = StyleSheet.create({
    background: {
      backgroundColor,
      flex: 1,
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
    touchable: {
      marginVertical: 8,
      paddingHorizontal: 16,
    },
  });

  return (
    <View style={styles.shiftContainer}>
      {!first && <View style={styles.borderLeft} />}
      <View style={styles.background}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.touchable}>
            <Badge left={65} number={number} />
            <Icon
              colour={iconColour}
              name={name}
              size={iconSize}
              style={styles.iconCentre}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.borderRight} />
    </View>
  );
};

export { Tab };
