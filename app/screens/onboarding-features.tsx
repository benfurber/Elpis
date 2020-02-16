import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { BackgroundModal, ButtonSubmit, Icon, Title } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { colours, elements, layout, typography } from "styles";
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
    const { features } = labels.onboarding;

    const iconColour = colours.navyBlueDark;
    const iconSize = 30;

    return (
      <BackgroundModal>
        <View style={styles.content}>
          <Title text={"2/4"} small />
          <Title style={styles.title} text={features.title} />

          <View style={styles.row}>
            <Icon colour={iconColour} name="home" size={iconSize} />
            <Title style={styles.subtitle} text={features.theFeedTitle} />
          </View>
          <Text style={styles.text}>{features.theFeedBody}</Text>

          <View style={styles.row}>
            <Icon colour={iconColour} name="comments" size={iconSize} />
            <Title
              style={styles.subtitle}
              text={features.joinDiscussionTitle}
            />
          </View>
          <Text style={styles.text}>{features.joinDiscussionBody}</Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>{labels.topics}</Text>
            {" - "} {features.topicsBody}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>{labels.replies}</Text>
            {" - "} {features.repliesBody}
          </Text>

          <View style={styles.row}>
            <Icon
              colour={iconColour}
              name="custom-thumbs"
              size={iconSize}
              style={styles.feedbackIcon}
            />
            <Title style={styles.subtitle} text={features.giveFeedbackTitle} />
          </View>
          <Text style={styles.text}>{features.giveFeedbackBody}</Text>

          <View style={[styles.row, styles.rowButton]}>
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
  bold: {
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: layout.spacingXL,
  },
  feedbackIcon: {
    paddingLeft: layout.spacing,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: layout.spacingL,
    marginTop: layout.spacing,
  },
  rowButton: {
    alignItems: "baseline",
    flexDirection: "row-reverse",
  },
  subtitle: {
    fontStyle: "italic",
    fontWeight: "normal",
    marginBottom: 0,
    paddingLeft: layout.spacing,
  },
  text: {
    paddingBottom: layout.spacingL,
  },
  title: {
    fontSize: typography.fontSizeXL,
    paddingBottom: layout.spacingL,
  },
});

export { OnboardingFeaturesScreen };
