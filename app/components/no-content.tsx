import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { BackgroundContainer, ErrorMessage, Icon } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { layout } from "styles";

interface Props {
  navigation: NavigationType;
}

class NoContent extends Component<Props> {
  render() {
    const { navigation } = this.props;

    const goBack = () => navigation.pop();
    const message = labels.errors.noContent;

    return (
      <BackgroundContainer>
        <TouchableOpacity style={styles.back} onPress={() => goBack()}>
          <Icon name="angle-double-left" style={styles.icon} />
          <Text>{labels.back}</Text>
        </TouchableOpacity>

        <ErrorMessage error={{ message }} />
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    paddingTop: layout.spacingL,
    paddingHorizontal: layout.spacingL,
    flexDirection: "row",
  },
  icon: {
    paddingRight: layout.spacingS,
  },
});

export { NoContent };
