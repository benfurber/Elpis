import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { colours, elements } from "styles";

interface Props {
  display: "active" | "error" | "loading";
  label: string;
  onPress: () => void;
}

const ButtonSubmit = (props: Props) => {
  const { display, label, onPress } = props;

  const isDisabled = {
    active: false,
    error: false,
    loading: true,
  };

  return (
    <View>
      <TouchableOpacity
        style={styles[display]}
        onPress={() => onPress()}
        disabled={isDisabled[display]}
      >
        <Text style={styles.text}>{label}</Text>
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
  text: {
    color: colours.pureWhite,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export { ButtonSubmit };
