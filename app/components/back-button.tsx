import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { Icon } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { layout } from "styles";

interface Props {
  navigation: NavigationType;
  text?: string;
}

const BackButton = (props: Props) => {
  const { text, navigation } = props;
  const { back } = labels.back;

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.pop()}>
      <Icon name="angle-double-left" style={styles.icon} />
      <Text>{text || back}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: layout.spacing,
  },
  icon: {
    paddingRight: layout.spacingS,
  },
});

export { BackButton };
