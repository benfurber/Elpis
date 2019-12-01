import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import { BackgroundContainer, Title, Icon } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { layout, typography, colours } from "styles";
import { Analytics } from "utils";
import { ButtonSubmit } from "../components/button-submit"

interface Props {
  navigation: NavigationType;
}

class LogoutScreen extends Component<Props> {
  componentDidMount() {
    Analytics.track("Logout");
  }

  onPress() {
    this.props.navigation.navigate("Welcome");
  }

  render() {
    return (
      <BackgroundContainer>
        <Title style={styles.title} text={"logout"} />
        <View>
          <View style={styles.row}>
            <Text>You have successfully logged out - Visit Again soon!</Text>
          </View>
          <View style={styles.row}>
            <ButtonSubmit
              display={"active"}
              label={labels.login}
              onPress={() => this.onPress()}
            />
          </View>
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
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: layout.spacing,
    padding: layout.spacingL,
  },
});

export { LogoutScreen };