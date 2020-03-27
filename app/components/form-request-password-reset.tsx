import React, { Component, Fragment } from "react";
import { StyleSheet, View } from "react-native";

import { Mutation } from "react-apollo";

import { ButtonSubmit, ErrorMessage, TextInput } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { colours, layout } from "styles";
import { REQUEST_PASSWORD_RESET } from "mutations";
import { bugTracker } from "utils";

interface Props {
  navigation: NavigationType;
  setRequestedState: (boolean) => void;
}

interface State {
  display: "active" | "error" | "loading";
  email: string;
  errorMessage: null | { message: string };
}

class FormRequestPasswordReset extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      display: "active",
      email: "",
      errorMessage: null,
    };
  }

  setError(error) {
    if (error) {
      console.log({ error });
      bugTracker.notify(error);
      return this.setState({
        display: "error",
        errorMessage: error,
      });
    }
  }

  onPress(login) {
    const { email } = this.state;
    this.setState({ display: "loading" });

    login({
      variables: { email },
    })
      .then(result => {
        if (!result.errors) {
          this.props.setRequestedState(true);
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
    const { email, display } = this.state;

    return (
      <View style={styles.container}>
        {this.renderErrorMessage()}

        <Mutation mutation={REQUEST_PASSWORD_RESET}>
          {login => (
            <Fragment>
              <View style={styles.row}>
                <TextInput
                  autoCapitalize="none"
                  autoFocus={true}
                  displayStyle={display}
                  keyboardType="email-address"
                  onChangeText={email => this.setState({ email })}
                  onSubmitEditing={() => this.onPress(login)}
                  placeholder={labels.email}
                  returnKeyLabel={"Send"}
                  returnKeyType="send"
                  textContentType="emailAddress"
                  value={email}
                />
              </View>
              <View style={styles.row}>
                <ButtonSubmit
                  display={email.length > 0 ? display : "loading"}
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

export { FormRequestPasswordReset };
