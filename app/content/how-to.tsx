import React from "react";
import { View } from "react-native";

import { Icon, Title } from "components";
import { OnboardingFeaturesContent, OnboardingFinalContent } from "content";
import { labels } from "labels";
import { colours } from "styles";

const HowToContent = () => {
  const { title } = labels.howTo;

  return (
    <View>
      <Icon name="hands-helping" size={40} colour={colours.navyBlueDark} />
      <Title text={title} large />
      <OnboardingFeaturesContent />
      <OnboardingFinalContent />
    </View>
  );
};

export { HowToContent };
