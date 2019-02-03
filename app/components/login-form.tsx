import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity
} from "react-native";

const CONSTANTS = {
  email: "Email",
  password: "Password"
};

interface Props {}
interface State {
  email: string;
  password: string;
}

class LoginForm extends Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
            placeholder={CONSTANTS.email}
            style={styles.input}
            textContentType="emailAddress"
            value={this.state.email}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            onChangeText={password => this.setState({ password })}
            placeholder={CONSTANTS.password}
            secureTextEntry
            style={styles.input}
            textContentType="password"
            value={this.state.password}
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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
