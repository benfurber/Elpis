import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Mutation } from "react-apollo";
import OneSignal from "react-native-onesignal";

import { BackgroundModal, ButtonSubmit, Title } from "components";
import { OnboardingFinalContent } from "content";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { USER_DETAILS } from "queries";
import { COMPLETE_USER_ONBOARDING } from "mutations";
import { layout, typography } from "styles";
import { Analytics, client } from "utils";

interface Props {
  navigation: NavigationType;
}

interface State {
  display: "active" | "loading";
}

class OnboardingFinalScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      display: "active",
    };
  }

  componentDidMount() {
    Analytics.trackContent({
      contentId: "onboarding-thank-you",
      contentType: "Onboarding",
    });
  }

  async onPress(mutation) {
    this.setState({ display: "loading" });

    await OneSignal.promptForPushNotificationsWithUserResponse(
      this.notificationCallback,
    );

    mutation().then(() => {
      this.setState({ display: "active" });
      return this.props.navigation.navigate("Feed");
    });
  }

  async notificationCallback(permission) {
    const getId = async () => {
      const query = USER_DETAILS;
      const result = await client.query({ query });
      return result.data.me.id;
    };

    const id = await getId();

    if (permission) {
      OneSignal.setSubscription(true);
      return OneSignal.setExternalUserId(id);
    }
  }

  render() {
    const { title } = labels.onboarding.final;

    return (
      <BackgroundModal>
        <View style={styles.content}>
          <Title text="4/4" small />
          <Title style={styles.title} text={title} />
          <OnboardingFinalContent />

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
  title: {
    fontSize: typography.fontSizeXL,
    paddingBottom: layout.spacingL,
  },
});

export { OnboardingFinalScreen };
