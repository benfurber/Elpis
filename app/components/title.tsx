import React from "react";
import { StyleSheet, Text } from "react-native";

import { layout, typography } from "styles";

interface Props {
  small?: true;
  style?: any;
  text: string;
}

const Title = (props: Props) => {
  const fontSize = () => {
    if (props.small) {
      return typography.fontSize;
    }
    return typography.fontSizeL;
  };

  return (
    <Text style={[styles.title, { fontSize: fontSize() }, props.style]}>
      {props.text}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Crete Round",
    fontWeight: "bold",
    marginBottom: layout.spacingS
  }
});

export { Title };
