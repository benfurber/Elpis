import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Icon, Title } from "components";
import { labels } from "labels";
import { colours, layout, typography } from "styles";

class OnboardingFinalContent extends Component {
  render() {
    const { final } = labels.onboarding;

    const iconColour = colours.navyBlueDark;
    const iconSize = 30;

    return (
      <View>
        <View style={styles.row}>
          <Icon colour={iconColour} name="custom-thumbs" size={iconSize} />
          <Title style={styles.subtitle} text={final.feedbackTitle} />
        </View>
        <Text style={styles.text}>{final.feedbackBody}</Text>

        <View style={styles.row}>
          <Icon colour={iconColour} name="hands-helping" size={iconSize} />
          <Title style={styles.subtitle} text={final.communityRulesTitle} />
        </View>
        <Text style={styles.text}>{final.communityRulesBody}</Text>
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

export { OnboardingFinalContent };
