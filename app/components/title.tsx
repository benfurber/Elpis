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
  const fontSize = () => {
    if (props.small) {
      return typography.fontSize;
    }
    if (props.large) {
      return typography.fontSizeXL;
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
    fontFamily: "creteround-regular",
    marginBottom: layout.spacingS,
  },
});

export { Title };
