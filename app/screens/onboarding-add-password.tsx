import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { BackgroundModal, FormAddPassword, Title } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { layout, typography } from "styles";
import { Analytics } from "utils";

interface Props {
  navigation: NavigationType;
}

interface State {
  password: string;
}

class OnboardingAddPasswordScreen extends Component<Props, State> {
  componentDidMount() {
    Analytics.trackContent({
      contentType: "Onboarding",
      contentId: "onboarding-password",
    });
  }

  render() {
    const { navigation } = this.props;

    return (
      <BackgroundModal>
        <View style={styles.content}>
          <Title text="3/4" small />
          <Title 
            style={styles.title}
            text={labels.onboarding.password.title}
          />

          <FormAddPassword
            navigation={navigation}
            onPress={() => navigation.navigate("ThankYou")}
          />
        </View>
      </BackgroundModal>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: layout.spacingXL,
  },
  title: {
    fontSize: typography.fontSizeXL,
    paddingBottom: layout.spacingL,
  },
});

export { OnboardingAddPasswordScreen };
