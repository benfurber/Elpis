import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { BackgroundModal, FormAddProfilePicture, Title } from "components";
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

class OnboardingAddProfilePictureScreen extends Component<Props, State> {
  componentDidMount() {
    Analytics.trackContent({
      contentType: "Onboarding",
      contentId: "onboarding-profile-picture",
    });
  }

  render() {
    const { navigation } = this.props;

    return (
      <BackgroundModal>
        <View style={styles.content}>
          <Title style={styles.title} text={labels.addProfilePictureTitle} />

          <FormAddProfilePicture
            navigation={navigation}
            onPress={() => navigation.navigate("AddPassword")}
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

export { OnboardingAddProfilePictureScreen };
