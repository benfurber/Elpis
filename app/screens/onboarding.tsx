import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Pages } from "react-native-pages";

import { BackgroundContainer, Title } from "components";
import { NavigationType } from "interfaces";
import { colours, layout, typography } from "styles";

const labels = {
  formTitle: "Please complete your profile",
  thankYouText:
    "Please remember to provide as much feedback as you can.\r\r" +
    "We won’t be able to build something great unless you tell us what you think.",
  thankYouTitle: "Please complete your profile",
  welcomeButton: "Next",
  welcomeTitle: "Bem vinda à Elpis, ",
  welcomeText: "Lots of words here. ",
};

interface Props {
  navigation: NavigationType;
}

class OnboardingScreen extends Component<Props> {
  completeProfilePage() {
    const { navigation } = this.props;

    return (
      <View style={styles.content}>
        <Title style={styles.title} text={labels.formTitle} />
      </View>
    );
  }

  thankYouPage() {
    return (
      <View style={styles.content}>
        <Title style={styles.title} text={labels.thankYouTitle} />
        <Title style={styles.subtitle} text={labels.thankYouText} />
      </View>
    );
  }

  welcomePage() {
    return (
      <View style={styles.content}>
        <Title
          style={styles.title}
          text={`${labels.welcomeTitle} [user.firstName]`}
        />
        <Text style={styles.text}>{labels.welcomeText}</Text>
        <Title style={styles.subtitle} text="May" />
      </View>
    );
  }

  render() {
    return (
      <BackgroundContainer>
        <View style={styles.container}>
          <Pages containerStyle={styles.pages}>
            {this.welcomePage()}
            {this.completeProfilePage()}
            {this.thankYouPage()}
          </Pages>
        </View>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    alignSelf: "center",
    color: colours.pureWhite,
  },
  container: {
    backgroundColor: colours.whiteTransparentHigh,
    borderTopLeftRadius: layout.borderRadiusL,
    borderTopRightRadius: layout.borderRadiusL,
    width: "100%",
    height: "100%",
    marginTop: layout.spacingL,
  },
  content: {
    flex: 1,
    padding: layout.spacingXL,
  },
  pages: {
    alignItems: "center",
    flexDirection: "row",
  },
  subtitle: {
    fontStyle: "italic",
    fontWeight: "normal",
    paddingBottom: layout.spacingL,
  },
  text: {
    paddingBottom: layout.spacingL,
  },
  title: {
    fontSize: typography.fontSizeXL,
    paddingBottom: layout.spacingL,
  },
});

export { OnboardingScreen };
