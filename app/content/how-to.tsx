import React from "react";
import { View } from "react-native";

import { Title } from "components";
import { OnboardingFeaturesContent, OnboardingFinalContent } from "content";
import { labels } from "labels";

const HowToContent = () => {
  const { title } = labels.howTo;

  return (
    <View>
      <Title text={title} large />
      <OnboardingFeaturesContent />
      <OnboardingFinalContent />
    </View>
  );
};

export { HowToContent };
