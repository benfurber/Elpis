import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { ButtonSubmit, TextInput, Title } from "components";
import { layout, typography } from "styles";

const labels = {
  formButton: "Submit",
  formTitle: "Please complete your profile",
  password: "Set password",
  passwordMismatch: "The passwords don't match",
  passwordRepeat: "Repeat password",
};

interface Props {
  onPress: () => void;
}

interface State {
  display: "active" | "error" | "loading";
  errorMessage: null | string;
  password: string;
  passwordRepeat: string;
}

class FormCompleteProfile extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      display: "active",
      errorMessage: null,
      password: "",
      passwordRepeat: "",
    };
  }

  onPress() {
    if (this.passwordsMatch()) {
      this.setState({ display: "loading" });
      return this.props.onPress();
    }

    this.passwordError();
  }

  passwordError() {
    this.setState({ display: "error" });
    this.setState({ errorMessage: labels.passwordMismatch });
  }

  passwordsMatch() {
    const { password, passwordRepeat } = this.state;

    if (password !== "") {
      if (password === passwordRepeat) {
        return true;
      }
    }
  }

  render() {
    const { display, password, passwordRepeat } = this.state;

    return (
      <View style={styles.content}>
        <Title style={styles.title} text={labels.formTitle} />

        <View style={styles.row}>
          <TextInput
            displayStyle={display}
            onChangeText={password => this.setState({ password })}
            placeholder={labels.password}
            secureTextEntry
            textContentType="password"
            value={password}
          />
        </View>

        <View style={styles.row}>
          <TextInput
            displayStyle={display}
            onChangeText={passwordRepeat => this.setState({ passwordRepeat })}
            placeholder={labels.passwordRepeat}
            secureTextEntry
            textContentType="password"
            value={passwordRepeat}
          />
        </View>

        <View style={styles.row}>
          <ButtonSubmit
            display={this.state.display}
            label={labels.formButton}
            onPress={() => this.onPress()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: layout.spacingXL,
    paddingTop: layout.spacingXL * 2,
  },
  row: {
    alignItems: "baseline",
    flexDirection: "row-reverse",
    marginBottom: layout.spacingL,
  },
  title: {
    fontSize: typography.fontSizeXL,
    paddingBottom: layout.spacingL,
  },
});

export { FormCompleteProfile };
