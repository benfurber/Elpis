import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

import { ButtonSubmit } from "components";
import { colours, elements, layout } from "styles";

const labels = {
  email: "Email",
  login: "Entrar",
  password: "Senha",
};

interface Props {
  navigation: any;
}
interface State {
  display: "active" | "error" | "loading";
  email: string;
  errorMessage: null | string;
  password: string;
}

class LoginForm extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      display: "active",
      email: "",
      errorMessage: null,
      password: "",
    };
  }

  onPress() {
    this.setState({ display: "loading" });
    this.props.navigation.navigate("Feed");
  }

  renderErrorMessage() {
    const { display, errorMessage } = this.state;

    if (display === "error" && errorMessage) {
      return (
        <View style={styles.row}>
          <View style={styles.containerErrorMessage}>
            <Text style={styles.textErrorMessage}>{errorMessage}</Text>
          </View>
        </View>
      );
    }
  }

  render() {
    const { display } = this.state;

    const isEditable = {
      active: true,
      error: true,
      loading: false,
    };

    const styleDisplay = {
      active: styles.inputActive,
      error: styles.inputError,
      loading: styles.inputLoading,
    };

    return (
      <View style={styles.container}>
        {this.renderErrorMessage()}
        <View style={styles.row}>
          <TextInput
            editable={isEditable[display]}
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
            placeholder={labels.email}
            style={styleDisplay[display]}
            textContentType="emailAddress"
            value={this.state.email}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            editable={isEditable[display]}
            onChangeText={password => this.setState({ password })}
            placeholder={labels.password}
            secureTextEntry
            style={styleDisplay[display]}
            textContentType="password"
            value={this.state.password}
          />
        </View>
        <View style={styles.row}>
          <ButtonSubmit
            display={display}
            label={labels.login}
            onPress={() => this.onPress()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
  },
  containerErrorMessage: {
    backgroundColor: colours.redTransparent,
    borderRadius: layout.borderRadius,
    flex: 1,
    padding: layout.spacing,
  },
  inputActive: {
    ...elements.textInputForm,
  },
  inputError: {
    ...elements.textInputForm,
    borderColor: colours.red,
    borderWidth: 2,
  },
  inputLoading: {
    ...elements.textInputForm,
    backgroundColor: colours.lightGrey,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
  },
  textErrorMessage: {
    alignSelf: "center",
    color: colours.pureWhite,
  },
});

export { LoginForm };
