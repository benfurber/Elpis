import React, { Component, Fragment } from "react";
import { StyleSheet, View } from "react-native";

import { Mutation } from "react-apollo";
import AsyncStorage from "@react-native-community/async-storage";

import { ButtonSubmit, ErrorMessage, TextInput } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { colours, layout } from "styles";
import { LOGIN_USER } from "mutations";

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

    return (
      <View style={styles.container}>
        {this.renderErrorMessage()}

        <Mutation mutation={LOGIN_USER}>
          {login => (
            <Fragment>
              <View style={styles.row}>
                <TextInput
                  autoCapitalize="none"
                  displayStyle={display}
                  keyboardType="email-address"
                  onChangeText={email => this.setState({ email })}
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
                  placeholder={labels.password}
                  secureTextEntry
                  returnKeyLabel={labels.login}
                  returnKeyType="send"
                  textContentType="password"
                  value={password}
                />
              </View>
              <View style={styles.row}>
                <ButtonSubmit
                  display={display}
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
    padding: layout.spacingXL,
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
