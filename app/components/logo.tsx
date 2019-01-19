import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Logo = () => {
  return (
    <View>
      <Text style={styles.logo}>Elpis</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export { Logo };
