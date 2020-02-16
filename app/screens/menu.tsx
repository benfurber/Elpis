import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import { BackgroundContainer, Title, Icon } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { layout, typography, colours } from "styles";
import { Analytics } from "utils";

interface Props {
  navigation: NavigationType;
}

class MenuScreen extends Component<Props> {
  componentDidMount() {
    Analytics.track("Menu");
  }

  onPress = async () => {
    try {
      await AsyncStorage.removeItem("token");
      this.props.navigation.navigate("Welcome");
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { logout, title } = labels.menu;

    return (
      <BackgroundContainer>
        <Title style={styles.title} text={title} />
        <View>
          <TouchableOpacity style={styles.item} onPress={() => this.onPress()}>
            <View style={styles.row}>
              <Icon name={"sign-out-alt"} />
              <Text style={styles.text}>{logout}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: colours.whiteTransparent,
    marginBottom: layout.spacing,
    padding: layout.spacingL,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: typography.fontSizeS,
    paddingLeft: 10,
  },
  title: {
    fontSize: typography.fontSizeXL,
    margin: layout.spacingL,
  },
});

export { MenuScreen };
