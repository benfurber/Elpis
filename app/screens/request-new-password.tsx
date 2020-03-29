import React, { Component, Fragment } from "react";
import { StyleSheet, View } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import {
  BackButton,
  BackgroundContainer,
  FormRequestPasswordReset,
  MessageBox,
  Title,
} from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { colours, layout } from "styles";
import { Analytics } from "utils";

interface Props {
  navigation: NavigationType;
}

interface State {
  requested: boolean;
}

class RequestNewPasswordScreen extends Component<Props, State> {
  state = {
    requested: false,
  };

  componentDidMount() {
    Analytics.track("Request New Password");
  }

  render() {
    const { navigation } = this.props;
    const { requested } = this.state;
    const { requestSent, subtitle, title } = labels.passwordReset.request;

    return (
      <BackgroundContainer>
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
          <BackButton
            navigation={navigation}
            onPress={() => navigation.navigate("Login")}
            text={labels.back.toLoginForm}
          />

          <View style={styles.form}>
            <Title style={styles.title} text={title} large />
            {!requested && (
              <Fragment>
                <Title style={styles.subtitle} text={subtitle} bold={false} />

                <FormRequestPasswordReset
                  navigation={navigation}
                  setRequestedState={requested => this.setState({ requested })}
                />
              </Fragment>
            )}
            {requested && (
              <MessageBox display={"passive"} message={requestSent} />
            )}
          </View>
        </KeyboardAwareScrollView>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: layout.spacingL,
  },
  form: {
    alignItems: "flex-end",
    flex: 6,
    padding: layout.spacingL,
  },
  subtitle: {
    paddingBottom: layout.spacingL,
    textAlign: "left",
    width: "100%",
  },
  text: {
    color: colours.darkGrey,
    marginLeft: 5,
  },
  title: {
    textAlign: "left",
    width: "100%",
  },
});

const wrappedRequestNewPasswordScreen = withMappedNavigationParams()(
  RequestNewPasswordScreen,
);
export {
  wrappedRequestNewPasswordScreen as RequestNewPasswordScreen,
  RequestNewPasswordScreen as UnwrappedRequestNewPasswordScreen,
};
