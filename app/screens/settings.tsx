import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { BackgroundContainer, Title } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { layout, typography } from "styles";
import { Analytics } from "utils";

interface Props {
  navigation: NavigationType;
}

class SettingsScreen extends Component<Props> {
  componentDidMount() {
    Analytics.track("Settings");
  }

  render() {
    return (
      <BackgroundContainer>
        <Title style={styles.title} text={labels.settings.title} />
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: typography.fontSizeXL,
    margin: layout.spacingL,
  },
});

export { SettingsScreen };
