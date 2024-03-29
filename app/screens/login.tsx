import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { BackgroundContainer, LoginForm, Logo } from "components";
import { NavigationType } from "interfaces";
import { colours, layout } from "styles";
import { labels } from "labels";
import { Analytics } from "utils";

interface Props {
  error?: null | { message: string };
  navigation: NavigationType;
}

class LoginScreen extends Component<Props> {
  componentDidMount() {
    Analytics.track("Login");
  }

  render() {
    const { error, navigation } = this.props;

    return (
      <BackgroundContainer>
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
          <View style={styles.logo}>
            <Logo />
          </View>
          <View style={styles.loginForm}>
            <LoginForm error={error} navigation={navigation} />
            <TouchableOpacity
              onPress={() => navigation.navigate("RequestNewPassword")}
            >
              <Text style={styles.text}>
                {labels.passwordReset.request.cta}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: layout.spacingXL,
  },
  loginForm: {
    alignItems: "flex-end",
    flex: 6,
    padding: layout.spacingXL,
  },
  logo: {
    alignItems: "stretch",
    flex: 1,
  },
  text: {
    color: colours.darkGrey,
    marginLeft: 5,
    textDecorationLine: "underline",
  },
});

const wrappedLoginScreen = withMappedNavigationParams()(LoginScreen);
export {
  wrappedLoginScreen as LoginScreen,
  LoginScreen as UnwrappedLoginScreen,
};
