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
      message: labels.password.request,
      password: "",
      passwordRepeat: "",
    };
  }

  secondInput = TextInput as any;

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
      return this.passwordError(labels.password.empty);
    }

    if (!this.passwordStrength(password)) {
      return this.passwordError(labels.password.stregthWeak);
    }

    if (password === passwordRepeat) {
      this.setState({ message: null });
      return true;
    } else {
      return this.passwordError(labels.password.mismatch);
    }
  }

  passwordStrength(password) {
    const passwordStrength = checkPasswordStrength(password);

    if (passwordStrength === "strong") {
      this.setState({
        display: "active",
        displayMessage: "passive",
        message: labels.password.stregthStrong,
      });
      return true;
    }

    if (passwordStrength === "medium") {
      this.setState({
        display: "active",
        displayMessage: "warn",
        message: labels.password.strengthMedium,
      });
      return true;
    }

    this.setState({
      displayMessage: "warn",
      message: labels.password.request,
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
                autoFocus={true}
                displayStyle={display}
                onChangeText={password => {
                  this.passwordStrength(password);
                  return this.setState({ password });
                }}
                onSubmitEditing={() => this.secondInput.focus()}
                placeholder={labels.password.set}
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
                forwardedRef={input => (this.secondInput = input)}
                onChangeText={passwordRepeat =>
                  this.setState({ passwordRepeat })
                }
                onSubmitEditing={() => this.onPress(updatePassword)}
                placeholder={labels.password.repeat}
                returnKeyLabel={labels.submit}
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
