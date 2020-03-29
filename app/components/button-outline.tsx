import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import { colours, layout } from "styles";

interface Props {
  label: string;
  onPress: () => void;
}

const ButtonOutline = (props: Props) => {
  const { label, onPress } = props;

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => onPress()}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colours.emeraldGreen,
    borderRadius: 100,
    borderWidth: 3,
    marginVertical: layout.spacing,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  text: {
    alignSelf: "center",
    color: colours.emeraldGreen,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export { ButtonOutline };
