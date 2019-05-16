import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colours } from "styles";

const Logo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.text}>Elpis</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    flex: 1,
    flexDirection: "column"
  },
  text: {
    alignSelf: "flex-end",
    color: colours.darkGrey,
    flex: 1,
    fontFamily: "Crete Round",
    fontSize: 40,
    margin: 10,
    textAlign: "center"
  },
  textBox: {
    alignItems: "center",
    alignSelf: "flex-end",
    flex: 1,
    flexDirection: "row",
    width: "100%"
  }
});

export { Logo };
