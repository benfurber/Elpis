import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { colours, elements } from "styles";

interface Props {
  display: "active" | "loading";
  label: string;
  onPress: () => void;
}

const ButtonSubmit = (props: Props) => {
  if (props.display == "loading") {
    return (
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.buttonLoading}
          onPress={() => props.onPress()}
          disabled
        >
          <Text style={styles.buttonText}>{props.label}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.buttonActive}
        onPress={() => props.onPress()}
      >
        <Text style={styles.buttonText}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonActive: {
    ...elements.button,
  },
  buttonLoading: {
    ...elements.button,
    backgroundColor: colours.lightGrey,
  },
  buttonText: {
    color: colours.pureWhite,
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
  },
  label: {
    flex: 1,
  },
  input: {
    backgroundColor: colours.pureWhite,
    borderRadius: 5,
    flex: 2,
    height: 40,
    padding: 10,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
  },
});

export { ButtonSubmit };
