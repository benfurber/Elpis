import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { colours, elements } from "styles";

interface Props {
  display: "active" | "loading";
  label: string;
  onPress: () => void;
}

const ButtonSubmit = (props: Props) => {
  const { display, label, onPress } = props;

  const isDisabled = {
    active: false,
    loading: true,
  };

  return (
    <View style={styles.container}>
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
  container: {
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
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
