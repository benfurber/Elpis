import React from "react";
import { StyleSheet, Text } from "react-native";

import { layout, typography } from "styles";

interface Props {
  bold?: boolean;
  large?: true;
  small?: true;
  style?: object;
  text: string;
}

const Title = (props: Props) => {
  const { fontSize, fontSizeL, fontSizeXL } = typography;
  const { bold, small, large } = props;

  const size = (small && fontSize) || (large && fontSizeXL) || fontSizeL;
  const notBold = (small && (bold === undefined || false)) || bold === false;
  const styles = StyleSheet.create({
    title: {
      fontFamily: "Dosis-ExtraLight",
      fontSize: size,
      fontWeight: notBold ? "500" : "600",
      marginBottom: layout.spacingS,
    },
  });

  return <Text style={[styles.title, props.style]}>{props.text}</Text>;
};

export { Title };
