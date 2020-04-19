import React from "react";
import { StyleSheet, View } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import { Icon } from "components";
import { colours, layout } from "styles";

interface Props {
  display: "active" | "error" | "loading";
  onPress: () => void;
  style?: object;
}

const ButtonIcon = (props: Props) => {
  const { display, onPress, style } = props;

  const isDisabled = {
    active: false,
    error: false,
    loading: true,
  };

  const styles = StyleSheet.create({
    active: {},
    button: {
      borderRadius: 50,
      padding: layout.spacing,
    },
    error: {
      backgroundColor: colours.lightGrey,
    },
    loading: {
      backgroundColor: colours.lightGrey,
    },
  });

  return (
    <View>
      <TouchableOpacity
        style={{ ...style, ...styles.button, ...styles[display] }}
        onPress={() => onPress()}
        disabled={isDisabled[display]}
      >
        <Icon colour={colours.pureWhite} name="arrow-alt-circle-right" />
      </TouchableOpacity>
    </View>
  );
};

export { ButtonIcon };
