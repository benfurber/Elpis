import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { colours, elements } from "styles";

interface Props {
  display: "active" | "error" | "loading";
  label: string;
  onPress: () => void;
  small?: boolean;
}

const ButtonSubmit = (props: Props) => {
  const { display, label, onPress, small } = props;

  const isDisabled = {
    active: false,
    error: false,
    loading: true,
  };

  const textStyle = small ? styles.textSmall : styles.text;
  const smallPadding = small ? styles.smallPadding : null;

  return (
    <View>
      <TouchableOpacity
        style={[styles[display], smallPadding]}
        onPress={() => onPress()}
        disabled={isDisabled[display]}
      >
        <Text style={textStyle}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  active: {
    ...elements.button,
  },
  error: {
    ...elements.button,
  },
  loading: {
    ...elements.button,
    backgroundColor: colours.lightGrey,
  },
  smallPadding: {
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  text: {
    alignSelf: "center",
    color: colours.pureWhite,
    fontSize: 16,
    fontWeight: "bold",
  },
  textSmall: {
    color: colours.pureWhite,
    fontSize: 14,
  },
});

export { ButtonSubmit };
