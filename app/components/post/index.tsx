import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colours, layout } from "styles";

interface Props {
  description: string;
}

const Post = (props: Props) => {
  const { description } = props;
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <View style={[styles.tabWithBackground, styles.tabSelected]} />
        <View style={styles.tabWithBackground} />
        <View style={styles.tabWithBackground} />
        <View style={styles.tabWithoutBackground} />
      </View>
      <View style={styles.body}>
        <Text>{description}</Text>
      </View>
      <View style={styles.footer} />
    </View>
  );
};

const tabs = {
  borderTopLeftRadius: layout.borderRadius,
  borderTopRightRadius: layout.borderRadius,
  flex: 1,
  marginRight: 2,
  paddingHorizontal: 16,
  paddingVertical: 8
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: colours.whiteTransparent,
    borderTopRightRadius: layout.borderRadius,
    padding: layout.padding,
    width: "100%"
  },
  container: {
    width: "100%"
  },
  footer: {
    backgroundColor: colours.navyBlueDark,
    borderBottomLeftRadius: layout.borderRadius,
    borderBottomRightRadius: layout.borderRadius,
    padding: layout.padding
  },
  tabs: {
    flexDirection: "row",
    width: "100%"
  },
  tabSelected: {
    backgroundColor: colours.whiteTransparent
  },
  tabWithBackground: {
    ...tabs,
    backgroundColor: colours.whiteTransparentHigh
  },
  tabWithoutBackground: {
    ...tabs
  }
});

export { Post };
