import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import {
  ButtonSubmit,
  MessageBox,
  ProfilePictureField,
  TextInput,
  Title,
} from "components";
import { NavigationType } from "interfaces";
import { colours, layout, typography } from "styles";
import { checkPasswordStrength } from "utils";

const labels = {
  formButton: "Submit",
  formTitle: "Please complete your profile",
  password: "Set password",
  passwordEmpty: "Password field empty",
  passwordMismatch: "The passwords don't match.",
  passwordMedium: "Password nearly strong enough.",
  passwordRepeat: "Repeat password",
  passwordRequest: "A nice strong password please.",
  passwordStrong: "Great password! Nice one.",
  passwordWeak: "Password too weak. Must include...",
};

interface Props {
  navigation: NavigationType;
  onPress: () => void;
}

interface State {
  display: "active" | "error" | "loading";
  displayForm: "passive" | "warn" | "error";
  formMessages: [string];
  password: string;
  passwordRepeat: string;
}

class FormCompleteProfile extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      display: "active",
      displayForm: "warn",
      formMessages: [labels.passwordRequest],
      password: "",
      passwordRepeat: "",
    };
  }

  onPress() {
    if (this.passwordChecks()) {
      this.setState({ display: "loading" });
      return this.props.onPress();
    }
  }

  passwordError(message) {
    return this.setState({
      display: "error",
      displayForm: "error",
      formMessages: [message],
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
        displayForm: "passive",
        formMessages: [labels.passwordStrong],
      });
      return true;
    }

    if (passwordStrength === "medium") {
      this.setState({
        display: "active",
        displayForm: "warn",
        formMessages: [labels.passwordMedium],
      });
      return true;
    }

    this.setState({
      displayForm: "warn",
      formMessages: [labels.passwordRequest],
    });

    return false;
  }

  render() {
    const {
      display,
      displayForm,
      formMessages,
      password,
      passwordRepeat,
    } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.content}>
        <Title style={styles.title} text={labels.formTitle} />

        <MessageBox display={displayForm} messages={formMessages} />

        <View style={styles.row}>
          <TextInput
            displayStyle={display}
            onChangeText={password => {
              this.passwordStrength(password);
              return this.setState({ password });
            }}
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

        <ProfilePictureField navigation={navigation} display={display} />

        <View style={styles.row}>
          <ButtonSubmit
            display={display}
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
  message: {
    backgroundColor: colours.whiteTransparentHigh,
    borderRadius: layout.borderRadius,
    borderWidth: 2,
    marginVertical: layout.spacingL,
    padding: layout.spacingL,
  },
  messageError: {
    borderColor: colours.red,
  },
  messagePassive: {
    borderColor: colours.navyBlueDark,
  },
  messageWarn: {
    borderColor: "orange",
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
