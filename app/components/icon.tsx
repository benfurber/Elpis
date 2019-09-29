import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { colours } from "styles";

interface Props {
  colour?: null | string;
  containerStyle?: object;
  name: string;
  size?: number;
  solid?: boolean;
  style?: object;
}

const customIcon = (props: Props) => {
  const { colour, containerStyle, name, size, solid, style } = props;

  return (
    <View style={containerStyle || null}>
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

export { customIcon as Icon };
