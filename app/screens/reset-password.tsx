import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import {
  BackButton,
  BackgroundContainer,
  FormAddPassword,
  Title,
} from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { layout } from "styles";

interface Props {
  navigation: NavigationType;
  passwordRequest: string;
  id: string;
}

class ResetPasswordScreen extends Component<Props> {
  async onPress(token) {
    await AsyncStorage.setItem("token", token);
    this.props.navigation.navigate("AuthLoading");
  }

  render() {
    const { navigation, passwordRequest, id } = this.props;

    return (
      <BackgroundContainer>
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollView}>
          <BackButton
            navigation={navigation}
            onPress={() => navigation.navigate("Login")}
            text={labels.back.toLoginForm}
          />
          <View style={styles.container}>
            <Title text={"Reset Password"} large />
            <FormAddPassword
              navigation={navigation}
              onPress={token => this.onPress(token)}
              extraProps={{ id, passwordRequest }}
            />
          </View>
        </KeyboardAwareScrollView>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
  },
  container: {
    padding: layout.spacingL,
  },
  scrollView: {
    borderTopLeftRadius: layout.borderRadiusL,
    borderTopRightRadius: layout.borderRadiusL,
    height: "100%",
    padding: layout.spacingL,
  },
});

const wrappedResetPasswordScreen = withMappedNavigationParams()(
  ResetPasswordScreen,
);
export {
  wrappedResetPasswordScreen as ResetPasswordScreen,
  ResetPasswordScreen as UnwrappedResetPasswordScreen,
};
