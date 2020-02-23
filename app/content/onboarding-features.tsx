import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Icon, Title } from "components";
import { labels } from "labels";
import { colours, layout } from "styles";

class OnboardingFeaturesContent extends Component {
  render() {
    const { features } = labels.onboarding;

    const iconColour = colours.navyBlueDark;
    const iconSize = 30;

    return (
      <View>
        <View style={styles.row}>
          <Icon colour={iconColour} name="home" size={iconSize} />
          <Title style={styles.subtitle} text={features.theFeedTitle} />
        </View>
        <Text style={styles.text}>{features.theFeedBody}</Text>

        <View style={styles.row}>
          <Icon colour={iconColour} name="comments" size={iconSize} />
          <Title style={styles.subtitle} text={features.joinDiscussionTitle} />
        </View>
        <Text style={styles.text}>{features.joinDiscussionBody}</Text>

        <Text style={styles.bold}>{features.topicsTitle}</Text>
        <Text style={styles.text}>{features.topicsBody}</Text>

        <Text style={styles.bold}>{features.repliesTitle}</Text>
        <Text style={styles.text}>{features.repliesBody}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: layout.spacingL,
    marginTop: layout.spacing,
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
});

export { OnboardingFeaturesContent };
