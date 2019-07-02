import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { BackgroundModal, ButtonSubmit, Title } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { layout, typography } from "styles";
import { Analytics } from "utils";

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
          <Title style={styles.title} text={labels.thankYouTitle} />
          <Title style={styles.subtitle} text={labels.thankYouText} />
          <View style={styles.row}>
            <ButtonSubmit
              display={"active"}
              label={labels.enter}
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
