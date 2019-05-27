import React, { Component } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Pages } from "react-native-pages";

import { BackgroundContainer, ButtonSubmit, Title } from "components";
import { NavigationType } from "interfaces";
import { colours, elements, layout, typography } from "styles";

const mayImagePath = "../assets/images/profile-pic-may.jpg";
const handImagePath = "../assets/images/hand.png";

const labels = {
  formButton: "Submit",
  formTitle: "Please complete your profile",
  thankYouButton: "Enter",
  thankYouText:
    "Please remember to provide as much feedback as you can.\r\r" +
    "We won’t be able to build something great unless you tell us what you think.",
  thankYouTitle: "Please complete your profile",
  password: "Set password",
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

let _pages;

class OnboardingScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.updateRef = this.updateRef.bind(this);
    this.state = {
      password: "",
    };
  }

  updateRef(ref) {
    _pages = ref;
  }

  nextPage(number) {
    if (_pages) {
      _pages.scrollToPage(number);
    }
  }

  completeProfilePage() {
    return (
      <View style={styles.content}>
        <Title style={styles.title} text={labels.formTitle} />

        <View style={styles.row}>
          <TextInput
            onChangeText={password => this.setState({ password })}
            placeholder={labels.password}
            secureTextEntry
            style={elements.textInputField}
            textContentType="password"
            value={this.state.password}
          />
        </View>

        <View style={styles.row}>
          <ButtonSubmit
            display={"active"}
            label={labels.welcomeButton}
            onPress={() => this.nextPage(2)}
          />
        </View>
      </View>
    );
  }

  thankYouPage() {
    const { navigation } = this.props;

    return (
      <View style={styles.content}>
        <Title style={styles.title} text={labels.thankYouTitle} />
        <Title style={styles.subtitle} text={labels.thankYouText} />
        <View style={styles.row}>
          <ButtonSubmit
            display={"active"}
            label={labels.thankYouButton}
            onPress={() => navigation.navigate("Main")}
          />
        </View>
      </View>
    );
  }

  welcomePage() {
    return (
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
            onPress={() => this.nextPage(1)}
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <BackgroundContainer>
        <ImageBackground
          imageStyle={styles.imageHand}
          source={require(handImagePath)}
          style={styles.containerHand}
        >
          <View style={styles.container}>
            <Pages containerStyle={styles.pages} ref={this.updateRef}>
              {this.welcomePage()}
              {this.completeProfilePage()}
              {this.thankYouPage()}
            </Pages>
          </View>
        </ImageBackground>
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
  containerHand: {
    width: "100%",
    height: "100%",
    flexDirection: "column-reverse",
    alignItems: "flex-end",
  },
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
  imageHand: {
    flex: 1,
    width: 360,
    height: 340,
    bottom: 0,
    left: -10,
    opacity: 0.2,
  },
  pages: {
    alignItems: "center",
    flexDirection: "column",
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

export { OnboardingScreen };
