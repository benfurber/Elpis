import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Pages } from "react-native-pages";

import { BackgroundContainer, Title } from "components";
import { NavigationType } from "interfaces";
import { colours, layout, typography } from "styles";

const labels = {
  welcomeTitle: "Bem vinda à Elpis, ",
  welcomeText: "Lots of words here. ",
};

interface Props {
  navigation: NavigationType;
}

class OnboardingScreen extends Component<Props> {
  welcomePage() {
    return (
      <View style={styles.content}>
        <Title
          style={styles.title}
          text={`${labels.welcomeTitle} [user.firstName]`}
        />
        <Text style={styles.text}>{labels.welcomeText}</Text>
        <Title style={styles.signature} text="May" />
      </View>
    );
  }

  render() {
    const { navigation } = this.props;

    return (
      <BackgroundContainer>
        <View style={styles.container}>
          <Pages>{this.welcomePage()}</Pages>
        </View>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colours.whiteTransparentHigh,
    borderTopLeftRadius: layout.borderRadiusL,
    borderTopRightRadius: layout.borderRadiusL,
    flexDirection: "row",
    width: "100%",
    height: "100%",
    marginTop: layout.spacingL,
  },
  content: {
    flex: 1,
    padding: layout.spacingXL,
  },
  signature: {
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
