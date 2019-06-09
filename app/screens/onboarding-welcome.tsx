import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { BackgroundModal, ButtonSubmit, Title } from "components";
import { NavigationType } from "interfaces";
import { colours, elements, layout, typography } from "styles";

const mayImagePath = "../assets/images/profile-pic-may.jpg";

const labels = {
  welcomeButton: "Next",
  welcomeTitle: "Bem vinda à Elpis, ",
  welcomeText: "Lots of words here. ",
};

interface Props {
  navigation: NavigationType;
}

interface State {
  password: string;
}

class OnboardingWelcomeScreen extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return (
      <BackgroundModal>
        <View style={styles.content}>
          <Image source={require(mayImagePath)} style={styles.image} />

          <Title
            style={styles.title}
            text={`${labels.welcomeTitle} [user.firstName]`}
          />
          <Text style={styles.text}>{labels.welcomeText}</Text>
          <Title style={styles.subtitle} text="May" />

          <View style={styles.row}>
            <ButtonSubmit
              display={"active"}
              label={labels.welcomeButton}
              onPress={() => navigation.navigate("CompleteProfile")}
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
  image: {
    ...elements.imageRoundLarge,
    borderColor: colours.navyBlueDark,
    borderWidth: 4,
    marginBottom: layout.spacingL,
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
  text: {
    paddingBottom: layout.spacingL,
  },
  title: {
    fontSize: typography.fontSizeXL,
    paddingBottom: layout.spacingL,
  },
});

export { OnboardingWelcomeScreen };
