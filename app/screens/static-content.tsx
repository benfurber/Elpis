import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { BackgroundContainer, Icon } from "components";
import { NavigationType } from "interfaces";
import { layout } from "styles";

interface Props {
  backToText?: string;
  navigation: NavigationType;
}

class StaticContentScreen extends Component<Props> {
  backButton() {
    const { backToText, navigation } = this.props;

    if (backToText) {
      return (
        <TouchableOpacity style={styles.back} onPress={() => navigation.pop()}>
          <Icon name="angle-double-left" style={styles.icon} />
          <Text>{backToText}</Text>
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <BackgroundContainer>
        {this.backButton()}
        <View></View>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    flexDirection: "row",
    paddingBottom: layout.spacing,
    paddingHorizontal: layout.spacing,
  },
  fullHeight: {
    flex: 1,
  },
  icon: {
    paddingRight: layout.spacingS,
  },
});

export { StaticContentScreen };
