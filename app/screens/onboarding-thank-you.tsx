import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Mutation } from "react-apollo";

import { BackgroundModal, ButtonSubmit, Title } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { COMPLETE_USER_ONBOARDING } from "mutations";
import { layout, typography } from "styles";
import { Analytics } from "utils";

interface Props {
  navigation: NavigationType;
}

interface State {
  display: "active" | "loading";
}

class OnboardingThankYouScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      display: "active",
    };
  }

  componentDidMount() {
    Analytics.trackContent({
      contentType: "Onboarding",
      contentId: "onboarding-thank-you",
    });
  }

  onPress(mutation) {
    this.setState({ display: "loading" });

    mutation().then(() => {
      this.setState({ display: "active" });
      return this.props.navigation.navigate("Feed");
    });
  }

  render() {
    const { thankYou } = labels.onboarding;

    return (
      <BackgroundModal>
        <View style={styles.content}>
          <Title text="4/4" small />
          <Title style={styles.title} text={thankYou.title} />
          <Title style={styles.subtitle} text={thankYou.text} />
          <View style={styles.row}>
            <Mutation mutation={COMPLETE_USER_ONBOARDING}>
              {(completeUserOnboarding, {}) => (
                <ButtonSubmit
                  display={this.state.display}
                  label={labels.enter}
                  onPress={() => this.onPress(completeUserOnboarding)}
                />
              )}
            </Mutation>
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
