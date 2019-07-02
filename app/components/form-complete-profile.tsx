import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { PhotoIdentifier } from "@react-native-community/cameraroll";

import {
  ButtonSubmit,
  MessageBox,
  ProfilePictureField,
  TextInput,
  Title,
} from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { layout, typography } from "styles";
import { checkPasswordStrength } from "utils";

interface Props {
  navigation: NavigationType;
  onPress: () => void;
}

interface State {
  display: "active" | "error" | "loading";
  displayMessage: "passive" | "warn" | "error";
  image: null | PhotoIdentifier;
  messageImage: null | string;
  messagePassword: null | string;
  password: string;
  passwordRepeat: string;
}

class FormCompleteProfile extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      display: "active",
      displayMessage: "warn",
      messageImage: null,
      messagePassword: labels.passwordRequest,
      image: null,
      password: "",
      passwordRepeat: "",
    };
  }

  onPress() {
    if (this.passwordChecks() && this.imageCheck()) {
      this.setState({ display: "loading" });
      return this.props.onPress();
    }
  }

  imageCheck() {
    if (this.state.image) {
      return true;
    }

    this.setState({
      display: "error",
      displayMessage: "error",
      messageImage: labels.imageEmpty,
    });

    return false;
  }

  passwordError(message) {
    return this.setState({
      display: "error",
      displayMessage: "error",
      messagePassword: message,
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
      this.setState({ messagePassword: null });
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
        messagePassword: labels.passwordStrong,
      });
      return true;
    }

    if (passwordStrength === "medium") {
      this.setState({
        display: "active",
        displayMessage: "warn",
        messagePassword: labels.passwordMedium,
      });
      return true;
    }

    this.setState({
      displayMessage: "warn",
      messagePassword: labels.passwordRequest,
    });

    return false;
  }

  render() {
    const {
      display,
      displayMessage,
      messageImage,
      messagePassword,
      image,
      password,
      passwordRepeat,
    } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.content}>
        <Title style={styles.title} text={labels.formTitle} />

        <MessageBox
          display={displayMessage}
          messages={[messagePassword, messageImage]}
        />

        <View style={styles.row}>
          <TextInput
            displayStyle={display}
            onChangeText={password => {
              this.passwordStrength(password);
              return this.setState({ password });
            }}
            placeholder={labels.passwordSet}
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

        <ProfilePictureField
          display={display}
          image={image}
          navigation={navigation}
          setImage={image => {
            this.setState({ image });
          }}
        />

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
