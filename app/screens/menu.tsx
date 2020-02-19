import React, { Component } from "react";
import { StyleSheet } from "react-native";

import {
  BackgroundContainer,
  ButtonMenuWrapper,
  ButtonLogout,
  Title,
} from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { layout, typography, colours } from "styles";
import { Analytics } from "utils";

interface Props {
  navigation: NavigationType;
}

class MenuScreen extends Component<Props> {
  componentDidMount() {
    Analytics.track("Menu");
  }

  render() {
    const { communityRules, howTo, menu } = labels;
    const { navigation } = this.props;

    return (
      <BackgroundContainer>
        <Title style={styles.title} text={menu.title} />
        <ButtonMenuWrapper
          iconName="hands-helping"
          onPress={() =>
            navigation.navigate("CommunityRules", {
              backToText: labels.back.toMenu,
              title: communityRules.title,
            })
          }
          text={communityRules.title}
        />
        <ButtonMenuWrapper
          iconName="mobile-alt"
          onPress={() =>
            navigation.navigate("HowTo", {
              backToText: labels.back.toMenu,
              title: howTo.title,
            })
          }
          text={howTo.title}
        />
        <ButtonLogout navigation={navigation} />
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: colours.whiteTransparent,
    marginBottom: layout.spacing,
    padding: layout.spacingL,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: typography.fontSizeS,
    paddingLeft: 10,
  },
  title: {
    fontSize: typography.fontSizeXL,
    margin: layout.spacingL,
  },
});

export { MenuScreen };
