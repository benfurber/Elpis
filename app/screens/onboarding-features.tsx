import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { BackgroundModal, ButtonSubmit, Title } from "components";
import { OnboardingFeaturesContent } from "content";
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

class OnboardingFeaturesScreen extends Component<Props, State> {
  componentDidMount() {
    Analytics.trackContent({
      contentId: "onboarding-welcome",
      contentType: "Onboarding",
    });
  }

  render() {
    const { navigation } = this.props;
    const { title } = labels.onboarding.features;

    return (
      <BackgroundModal>
        <View style={styles.content}>
          <Title text={"2/4"} small />
          <Title style={styles.title} text={title} />

          <OnboardingFeaturesContent />

          <View style={styles.row}>
            <ButtonSubmit
              display={"active"}
              label={labels.next}
              onPress={() => navigation.navigate("AddPassword")}
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
  },
  row: {
    alignItems: "baseline",
    flexDirection: "row-reverse",
    marginBottom: layout.spacingL,
    marginTop: layout.spacing,
  },
  title: {
    fontSize: typography.fontSizeXL,
    paddingBottom: layout.spacingL,
  },
});

export { OnboardingFeaturesScreen };
