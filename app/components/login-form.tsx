import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity
} from "react-native";

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput style={styles.input} value="Email" />
      </View>
      <View style={styles.row}>
        <TextInput style={styles.input} value="Password" />
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(4, 71, 47, 0.75)",
    borderRadius: 100,
    color: "rgb(255, 255, 255)",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  buttonText: {
    color: "rgb(255, 255, 255)",
    fontSize: 16,
    fontWeight: "bold"
  },
  container: {
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center"
  },
  label: {
    flex: 1
  },
  input: {
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 5,
    flex: 2,
    height: 40,
    padding: 10
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    margin: 10
  }
});

export { LoginForm };
