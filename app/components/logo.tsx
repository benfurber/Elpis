import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FlexImage from "react-native-flex-image";
import { colours, layout } from "styles";

const logoFile = "../assets/images/logo.png";

const Logo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <FlexImage source={require(logoFile)} style={styles.image} />
        <Text style={styles.text}>Elpis</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    flex: 1,
    flexDirection: "row",
  },
  image: {
    borderRadius: 20,
    height: 40,
    overflow: "hidden",
    width: 40,
  },
  text: {
    alignSelf: "flex-end",
    color: colours.darkGrey,
    fontFamily: "Crete Round",
    fontSize: 32,
    marginLeft: layout.spacing,
    textAlign: "center",
  },
  textBox: {
    alignItems: "center",
    alignSelf: "flex-end",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: layout.spacing,
    width: "100%",
  },
});

export { Logo };
