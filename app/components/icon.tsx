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

function TheIcon(props: Props) {
  const { colour, name, size, solid, style } = props;

  return (
    <Icon
      style={style || null}
      color={colour || colours.darkGrey}
      name={name}
      size={size || 20}
      solid={solid === undefined ? true : solid}
    />
  );
}

const customIcon = (props: Props) => {
  const { containerStyle, name } = props;

  if (name === "custom-thumbs") {
    const newProps = {
      ...props,
      name: "thumbs-up",
      size: (props.size || 20) * 0.8,
    };

    return (
      <View style={{ flexDirection: "row" }}>
        <TheIcon {...newProps} />
        <View style={{ paddingRight: 5, transform: [{ rotate: "180deg" }] }}>
          <TheIcon {...newProps} />
        </View>
      </View>
    );
  }

  return (
    <View style={containerStyle || null}>
      <TheIcon {...props} />
    </View>
  );
};

export { customIcon as Icon };
