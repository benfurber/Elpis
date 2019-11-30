import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import { BackgroundContainer, Title, Icon } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { layout, typography, colours } from "styles";
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
        <View>
          <TouchableOpacity
            style={styles.item}
            onPress={() => null}
          >
            <View style={styles.row}>
              <Icon name={"sign-out-alt"} />
              <Text>Settings</Text>
            </View>
          </TouchableOpacity>
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

export { SettingsScreen };
