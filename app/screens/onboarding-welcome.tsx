import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useQuery } from "@apollo/react-hooks";

import { BackgroundModal, ButtonSubmit, Title } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { USER_DETAILS } from "queries";
import { colours, elements, layout, typography } from "styles";
import { Analytics } from "utils";

const mayImagePath = "../assets/images/profile-pic-may.jpg";

interface Props {
  navigation: NavigationType;
}

function OnboardingWelcomeScreen(props: Props) {
  const { data } = useQuery(USER_DETAILS);
  Analytics.trackContent({
    contentType: "Onboarding",
    contentId: "onboarding-welcome",
  });

  const { navigation } = props;
  const { welcome } = labels.onboarding;

  return (
    <BackgroundModal>
      <View style={styles.content}>
        <Image source={require(mayImagePath)} style={styles.image} />
        <Title text={"1/4"} small />
        <Title
          style={styles.title}
          text={`${welcome.title} \n${data.me.name || ""}`}
        />
        <Text style={styles.text}>{welcome.text}</Text>
        <Title style={styles.subtitle} text="May" />

        <View style={styles.row}>
          <ButtonSubmit
            display={"active"}
            label={labels.next}
            onPress={() => navigation.navigate("Features")}
          />
        </View>
      </View>
    </BackgroundModal>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: layout.spacingXL,
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
