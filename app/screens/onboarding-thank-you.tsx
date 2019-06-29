import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { BackgroundModal, ButtonSubmit, Title } from "components";
import { NavigationType } from "interfaces";
import { layout, typography } from "styles";
import { Analytics } from "utils";

const labels = {
  button: "Enter",
  text:
    "Please remember to provide as much feedback as you can.\r\r" +
    "We won’t be able to build something great unless you tell us what you think.",
  title: "Please complete your profile",
};

interface Props {
  navigation: NavigationType;
}

class OnboardingThankYouScreen extends Component<Props> {
  componentDidMount() {
    Analytics.trackContent({
      contentType: "Onboarding",
      contentId: "onboarding-3",
    });
  }

  render() {
    const { navigation } = this.props;

    return (
      <BackgroundModal>
        <View style={styles.content}>
          <Title style={styles.title} text={labels.title} />
          <Title style={styles.subtitle} text={labels.text} />
          <View style={styles.row}>
            <ButtonSubmit
              display={"active"}
              label={labels.button}
              onPress={() => navigation.navigate("Main")}
            />
          </View>
        </View>
      </BackgroundModal>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: layout.spacingXL,
    paddingTop: layout.spacingXL * 2,
  },
  row: {
    alignItems: "baseline",
    flexDirection: "row-reverse",
    marginBottom: layout.spacingL,
  },
  subtitle: {
    fontStyle: "italic",
    fontWeight: "normal",
    paddingBottom: layout.spacingL,
  },
  title: {
    fontSize: typography.fontSizeXL,
    paddingBottom: layout.spacingL,
  },
});

export { OnboardingThankYouScreen };
