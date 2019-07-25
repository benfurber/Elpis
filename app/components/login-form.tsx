import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import { ButtonSubmit, TextInput } from "components";
import { labels } from "labels";
import { colours, layout } from "styles";

import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

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

  storeToken = async token => {
    try {
      await AsyncStorage.setItem("token", token);
      this.props.navigation.navigate("AuthLoading");
    } catch (error) {
      console.log(error);
    }
  };

  onPress(login) {
    const { email, password } = this.state;
    this.setState({ display: "loading" });
    login({
      variables: { email, password },
    }).then(result => {
      const token = result.data.login.token;
      this.storeToken(token);
    });
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

    return (
      <View style={styles.container}>
        {this.renderErrorMessage()}
        <View style={styles.row}>
          <TextInput
            displayStyle={display}
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
            placeholder={labels.email}
            textContentType="emailAddress"
            value={this.state.email}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            displayStyle={display}
            onChangeText={password => this.setState({ password })}
            placeholder={labels.password}
            secureTextEntry
            textContentType="password"
            value={this.state.password}
          />
        </View>
        <View style={styles.row}>
          <Mutation mutation={LOGIN_USER}>
            {(login, {}) => (
              <ButtonSubmit
                display={display}
                label={labels.login}
                onPress={() => this.onPress(login)}
              />
            )}
          </Mutation>
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
