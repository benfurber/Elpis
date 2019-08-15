import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Title } from "components";
import { colours, layout } from "styles";

const labels = {
  error: "erro",
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
    const { message } = this.props.error;

    if (message === "Network error: Network request failed") {
      return labels.networkRequestFailed;
    }

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
    margin: layout.spacingL,
    padding: layout.spacingL,
  },
  text: {
    color: colours.pureWhite,
  },
  title: {
    color: colours.pureWhite,
  },
});

export { ErrorMessage };
