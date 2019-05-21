import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";

import { colours } from "styles";

interface Props {
  children: object;
  style?: object;
  viewStyle?: object;
}

const BackgroundContainer = (props: Props) => {
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={props.style || styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={props.viewStyle || styles.viewContainer}>
          {props.children}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.transparentBlue,
    height: "100%",
    width: "100%",
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
