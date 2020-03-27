import React, { Component, Fragment } from "react";
import { StyleSheet, View } from "react-native";

import { Mutation } from "react-apollo";
import AsyncStorage from "@react-native-community/async-storage";

import { ButtonSubmit, ErrorMessage, TextInput } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { colours, layout } from "styles";
import { LOGIN_USER } from "mutations";
import { bugTracker } from "utils";

interface Props {
  navigation: NavigationType;
}
interface State {
  display: "active" | "error" | "loading";
  email: string;
  errorMessage: null | { message: string };
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

  secondInput = TextInput as any;

  storeToken = async token => {
    try {
      await AsyncStorage.setItem("token", token);
      this.props.navigation.navigate("AuthLoading");
    } catch (error) {
      console.log(error);
    }
  };

  setError(error) {
    if (error) {
      bugTracker.notify(error);
      return this.setState({
        display: "error",
        errorMessage: error,
        password: "",
      });
    }
  }

  onPress(login) {
    const { email, password } = this.state;
    this.setState({ display: "loading" });

    login({
      variables: { email, password },
    })
      .then(result => {
        if (!result.errors) {
          const token = result.data.login.token;
          this.storeToken(token);
        } else {
          this.setError(result.errors);
        }
      })
      .catch(error => this.setError(error));
  }

  renderErrorMessage() {
    const { display, errorMessage } = this.state;

    if (display === "error" && errorMessage) {
      return (
        <View style={styles.row}>
          <ErrorMessage error={errorMessage} />
        </View>
      );
    }
  }

  render() {
    const { email, display, password } = this.state;

    const fieldsPopulated = (email.length && password.length) > 0;

    return (
      <View style={styles.container}>
        {this.renderErrorMessage()}

        <Mutation mutation={LOGIN_USER}>
          {login => (
            <Fragment>
              <View style={styles.row}>
                <TextInput
                  autoCapitalize="none"
                  autoFocus={true}
                  displayStyle={display}
                  keyboardType="email-address"
                  onChangeText={email => this.setState({ email })}
                  onSubmitEditing={() => this.secondInput.focus()}
                  placeholder={labels.email}
                  returnKeyLabel={labels.next}
                  returnKeyType="next"
                  textContentType="emailAddress"
                  value={email}
                />
              </View>
              <View style={styles.row}>
                <TextInput
                  displayStyle={display}
                  onChangeText={password => this.setState({ password })}
                  onSubmitEditing={() => this.onPress(login)}
                  placeholder={labels.password.password}
                  secureTextEntry
                  forwardedRef={input => (this.secondInput = input)}
                  returnKeyLabel={labels.login}
                  returnKeyType="send"
                  textContentType="password"
                  value={password}
                />
              </View>
              <View style={styles.row}>
                <ButtonSubmit
                  display={fieldsPopulated ? display : "loading"}
                  label={labels.login}
                  onPress={() => this.onPress(login)}
                />
              </View>
            </Fragment>
          )}
        </Mutation>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    flexDirection: "column",
  },
  containerErrorMessage: {
    backgroundColor: colours.redTransparent,
    borderRadius: layout.borderRadius,
    flex: 1,
    padding: layout.spacing,
  },
  row: {
    flexDirection: "row",
    marginBottom: layout.spacingL,
  },
});

export { LoginForm };
