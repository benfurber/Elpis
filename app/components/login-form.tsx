import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { colours, elements } from "styles";

const labels = {
  email: "Email",
  login: "Entrar",
  password: "Senha",
};

interface Props {
  navigation: any;
}
interface State {
  display: "active" | "loading";
  email: string;
  password: string;
}

class LoginForm extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      display: "active",
      email: "",
      password: "",
    };
  }

  onPress() {
    this.setState({ display: "loading" });
    this.props.navigation.navigate("Feed");
  }

  renderButton() {
    if (this.state.display == "loading") {
      return (
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonLoading}
            onPress={() => this.onPress()}
            disabled
          >
            <Text style={styles.buttonText}>{labels.login}</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.buttonActive}
          onPress={() => this.onPress()}
        >
          <Text style={styles.buttonText}>{labels.login}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
            placeholder={labels.email}
            style={styles.input}
            textContentType="emailAddress"
            value={this.state.email}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            onChangeText={password => this.setState({ password })}
            placeholder={labels.password}
            secureTextEntry
            style={styles.input}
            textContentType="password"
            value={this.state.password}
          />
        </View>
        {this.renderButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonActive: {
    ...elements.button,
  },
  buttonLoading: {
    ...elements.button,
    backgroundColor: colours.lightGrey,
  },
  buttonText: {
    color: colours.pureWhite,
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
  },
  label: {
    flex: 1,
  },
  input: {
    backgroundColor: colours.pureWhite,
    borderRadius: 5,
    flex: 2,
    height: 40,
    padding: 10,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
  },
});

export { LoginForm };
