import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Mutation } from "react-apollo";

import { ButtonSubmit, MessageBox, TextInput } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { UPDATE_USER_PASSWORD } from "mutations";
import { layout } from "styles";
import { checkPasswordStrength } from "utils";

interface Props {
  navigation: NavigationType;
  onPress: () => void;
}

interface State {
  display: "active" | "error" | "loading";
  displayMessage: "passive" | "warn" | "error";
  message: null | string;
  password: string;
  passwordRepeat: string;
}

class FormAddPassword extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      display: "active",
      displayMessage: "warn",
      message: labels.passwordRequest,
      password: "",
      passwordRepeat: "",
    };
  }

  onPress(mutation) {
    if (this.passwordChecks()) {
      this.setState({ display: "loading" });
      mutation({
        variables: {
          password: this.state.password,
        },
      }).then(() => {
        this.setState({ display: "active" });
        return this.props.onPress();
      });
    }
  }

  passwordError(message) {
    return this.setState({
      display: "error",
      displayMessage: "error",
      message: message,
    });
  }

  passwordChecks() {
    const { password, passwordRepeat } = this.state;

    if (password === "" || passwordRepeat === "") {
      return this.passwordError(labels.passwordEmpty);
    }

    if (!this.passwordStrength(password)) {
      return this.passwordError(labels.passwordWeak);
    }

    if (password === passwordRepeat) {
      this.setState({ message: null });
      return true;
    } else {
      return this.passwordError(labels.passwordMismatch);
    }
  }

  passwordStrength(password) {
    const passwordStrength = checkPasswordStrength(password);

    if (passwordStrength === "strong") {
      this.setState({
        display: "active",
        displayMessage: "passive",
        message: labels.passwordStrong,
      });
      return true;
    }

    if (passwordStrength === "medium") {
      this.setState({
        display: "active",
        displayMessage: "warn",
        message: labels.passwordMedium,
      });
      return true;
    }

    this.setState({
      displayMessage: "warn",
      message: labels.passwordRequest,
    });

    return false;
  }

  render() {
    const {
      display,
      displayMessage,
      message,
      password,
      passwordRepeat,
    } = this.state;

    return (
      <Mutation mutation={UPDATE_USER_PASSWORD}>
        {(updatePassword, {}) => (
          <View>
            <MessageBox display={displayMessage} message={message} />

            <View style={styles.row}>
              <TextInput
                displayStyle={display}
                onChangeText={password => {
                  this.passwordStrength(password);
                  return this.setState({ password });
                }}
                placeholder={labels.passwordSet}
                returnKeyLabel={labels.next}
                returnKeyType="next"
                secureTextEntry
                textContentType="password"
                value={password}
              />
            </View>

            <View style={styles.row}>
              <TextInput
                displayStyle={display}
                onChangeText={passwordRepeat =>
                  this.setState({ passwordRepeat })
                }
                placeholder={labels.passwordRepeat}
                returnKeyLabel={labels.submit}
                onSubmitEditing={() => this.onPress(updatePassword)}
                returnKeyType="send"
                secureTextEntry
                textContentType="password"
                value={passwordRepeat}
              />
            </View>

            <View style={styles.row}>
              <ButtonSubmit
                display={display}
                label={labels.formButton}
                onPress={() => this.onPress(updatePassword)}
              />
            </View>
          </View>
        )}
      </Mutation>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    alignItems: "baseline",
    flexDirection: "row-reverse",
    marginBottom: layout.spacingL,
  },
});

export { FormAddPassword };
