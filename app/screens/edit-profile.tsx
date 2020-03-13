import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import {
  BackButton,
  BackgroundContainer,
  FormAddProfilePicture,
  Title,
} from "components";
import { NavigationType } from "interfaces";
import { colours, layout } from "styles";

interface Props {
  backToText: string;
  content: () => JSX.Element | Component;
  navigation: NavigationType;
  title?: string;
}

class EditProfileScreen extends Component<Props> {
  onPress() {
    const { navigation } = this.props;
    return navigation.popToTop();
  }

  render() {
    const { backToText, navigation, title } = this.props;

    return (
      <BackgroundContainer>
        <BackButton navigation={navigation} text={backToText} />
        <ScrollView style={styles.scrollView}>
          {title && <Title text={title} />}
          <FormAddProfilePicture
            navigation={navigation}
            onPress={() => this.onPress()}
          />
        </ScrollView>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
  },
  scrollView: {
    backgroundColor: colours.whiteTransparent,
    borderTopLeftRadius: layout.borderRadiusL,
    borderTopRightRadius: layout.borderRadiusL,
    height: "100%",
    padding: layout.spacingL,
  },
});

const wrappedEditProfileScreen = withMappedNavigationParams()(
  EditProfileScreen,
);
export {
  wrappedEditProfileScreen as EditProfileScreen,
  EditProfileScreen as UnwrappedEditProfileScreen,
};
