import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Title } from "components";
import { colours, layout } from "styles";

const labels = {
  emailAddressNotFound:
    "E-mail não cadastrado. Por favor, insira um e-mail válido e registrado no aplicativo.",
  error: "erro",
  invalidPassword: "Senha inválida",
  networkRequestFailed:
    "Houve um problema de conexão.\rQuando a internet estiver conectada, reinicie o aplicativo.",
};

interface Props {
  error: {
    message: string;
  };
}

class ErrorMessage extends Component<Props> {
  message() {
    let { message } = this.props.error;

    const messages = {
      "Invalid password": labels.invalidPassword,
      "Network request failed": labels.networkRequestFailed,
      "No such user found for email": labels.emailAddressNotFound,
    };

    Object.keys(messages).forEach(key => {
      if (message.includes(key)) {
        message = messages[key];
      }
    });

    return message;
  }

  render() {
    return (
      <View style={styles.container}>
        <Title style={styles.title} text={labels.error} />
        <Text style={styles.text}>{this.message()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    backgroundColor: colours.redTransparent,
    borderRadius: layout.borderRadiusL,
    flexDirection: "column",
    padding: layout.spacingL,
    width: "100%",
  },
  text: {
    color: colours.pureWhite,
  },
  title: {
    color: colours.pureWhite,
  },
});

export { ErrorMessage };
