import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Title } from "components";
import { layout } from "styles";

interface Props {
  text: string;
}

class NoContent extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Title text={this.props.text} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: layout.spacing,
    paddingVertical: layout.spacingL,
  },
});

export { NoContent };
