import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  ButtonSubmit,
  ProfilePictureField,
  TextInput,
  Title,
} from "components";
import { NavigationType } from "interfaces";
import { colours, elements, layout, typography } from "styles";

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
  formMessage: null | string;
  formMessageState: "passive" | "warn" | "error";
  password: string;
  passwordRepeat: string;
}

class FormCompleteProfile extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      display: "active",
      formMessage: labels.passwordRequest,
      formMessageState: "warn",
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
      formMessage: message,
      formMessageState: "error",
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
    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",
    );
    const mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",
    );

    if (strongRegex.test(password)) {
      this.setState({
        display: "active",
        formMessage: labels.passwordStrong,
        formMessageState: "passive",
      });
      return true;
    }

    if (mediumRegex.test(password)) {
      this.setState({
        display: "active",
        formMessage: labels.passwordMedium,
        formMessageState: "warn",
      });
      return true;
    }

    this.setState({
      formMessage: labels.passwordRequest,
      formMessageState: "warn",
    });

    return false;
  }

  renderMessage() {
    const { formMessage, formMessageState } = this.state;

    const style = {
      error: styles.messageError,
      passive: styles.messagePassive,
      warn: styles.messageWarn,
    };

    return (
      <View style={[styles.message, style[formMessageState]]}>
        <Text>{formMessage}</Text>
      </View>
    );
  }

  render() {
    const { display, password, passwordRepeat } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.content}>
        <Title style={styles.title} text={labels.formTitle} />

        {this.renderMessage()}

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
  image: {
    ...elements.imageRoundFeature,
  },
  imageContainer: {
    borderRadius: elements.imageRoundFeature.borderRadius,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: colours.emeraldGreen,
    margin: layout.spacingS,
    marginRight: layout.spacing,
    padding: 2,
  },
  imagesRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: layout.spacingL,
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
