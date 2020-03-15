import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { ButtonClose, BackgroundContainer, FormAddPassword } from "components";
import { NavigationType } from "interfaces";
import { colours, layout } from "styles";

interface Props {
  navigation: NavigationType;
  onPress: () => void;
}

class EditPasswordScreen extends Component<Props> {
  render() {
    const { navigation } = this.props;

    return (
      <BackgroundContainer header={<ButtonClose navigation={navigation} />}>
        <ScrollView style={styles.scrollView}>
          <FormAddPassword
            navigation={navigation}
            onPress={() => this.props.onPress()}
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

const wrappedEditPasswordScreen = withMappedNavigationParams()(
  EditPasswordScreen,
);
export {
  wrappedEditPasswordScreen as EditPasswordScreen,
  EditPasswordScreen as UnwrappedEditPasswordScreen,
};
