import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { ButtonMenuWrapper } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { bugTracker, client } from "utils";

interface Props {
  navigation: NavigationType;
}

class ButtonLogout extends Component<Props> {
  onPress = async () => {
    try {
      await AsyncStorage.removeItem("token");
      client.resetStore();

      this.props.navigation.navigate("Login");
    } catch (error) {
      bugTracker.notify(error);
      console.error(error);
    }
  };

  render() {
    return (
      <ButtonMenuWrapper
        iconName="sign-out-alt"
        onPress={() => this.onPress()}
        text={labels.menu.logout}
      />
    );
  }
}

export { ButtonLogout };
