import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import { BackgroundContainer, Title, Icon } from "components";
import { NavigationType } from "interfaces";
import { layout, typography, colours } from "styles";
import { Analytics } from "utils";

interface Props {
  navigation: NavigationType;
}

class LogoutScreen extends Component<Props> {
  componentDidMount() {
    Analytics.track("Logout");
  }

  render() {
    return (
      <BackgroundContainer>
        <Title style={styles.title} text={"logout"} />
        <View style={styles.row}>
            <Text>You have successfully logged out - Visit Again soon!</Text>
        </View>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: typography.fontSizeXL,
    margin: layout.spacingL,
  },
  item: {
    backgroundColor: colours.whiteTransparent,
    marginBottom: layout.spacing,
    padding: layout.spacingL,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export { LogoutScreen };