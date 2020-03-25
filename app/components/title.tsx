import React from "react";
import { StyleSheet, Text } from "react-native";

import { layout, typography } from "styles";

interface Props {
  large?: true;
  small?: true;
  style?: object;
  text: string;
}

const Title = (props: Props) => {
  const { fontSize, fontSizeL, fontSizeXL } = typography;
  const { small, large } = props;

  const size = (small && fontSize) || (large && fontSizeXL) || fontSizeL;

  const styles = StyleSheet.create({
    title: {
      fontFamily: "Dosis-ExtraLight",
      fontSize: size,
      fontWeight: small ? "500" : "600",
      marginBottom: layout.spacingS,
    },
  });

  return <Text style={[styles.title, props.style]}>{props.text}</Text>;
};

export { Title };
