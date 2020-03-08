import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";

import { colours, layout } from "styles";

interface Props {
  children: object;
  header?: JSX.Element;
  style?: object;
  viewStyle?: object;
}

const Header = ({ header }: { header: Props["header"] }) => {
  return (
    <View style={styles.header}>
      <View style={styles.closeContainer}>{header}</View>
    </View>
  );
};

const BackgroundContainer = (props: Props) => {
  const { children, header, style, viewStyle } = props;
  const { container, safeArea, viewContainer } = styles;

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={[container, style]}
    >
      <SafeAreaView style={safeArea}>
        <View style={viewStyle || viewContainer}>
          {header && <Header header={header} />}
          {children}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  closeContainer: {
    flexDirection: "row-reverse",
    padding: layout.spacing,
  },
  container: {
    backgroundColor: colours.transparentBlue,
    height: "100%",
    width: "100%",
  },
  header: {
    height: 60,
  },
  safeArea: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    flexDirection: "column",
  },
});

export { BackgroundContainer };
