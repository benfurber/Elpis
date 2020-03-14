import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Icon } from "components";
import { NavigationType } from "interfaces";
import { layout } from "styles";

interface Props {
  navigation: NavigationType;
}

const ButtonClose = (props: Props) => {
  const { navigation } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.pop()}>
      <Icon name="times-circle" size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: layout.spacing,
  },
});

export { ButtonClose };