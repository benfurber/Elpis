import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { colours } from "styles";

interface Props {
  colour?: string;
  name: string;
  size?: number;
  solid?: boolean;
  style?: object;
}

const customIcon = (props: Props) => {
  const { colour, name, size, solid, style } = props;

  return (
    <View style={styles.container}>
      <Icon
        style={style || null}
        color={colour || colours.darkGrey}
        name={name}
        size={size || 20}
        solid={solid || true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center"
  }
});

export { customIcon as Icon };
