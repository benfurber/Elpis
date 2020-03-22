import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import {
  BackButton,
  BackgroundContainer,
  ButtonOutline,
  FormAddProfilePicture,
  Title,
} from "components";
import { NavigationType, User } from "interfaces";
import { labels } from "labels";
import { USER_DETAILS } from "queries";
import { colours, layout, typography } from "styles";
import { client } from "utils";

interface Props {
  backToText: string;
  content: () => JSX.Element | Component;
  navigation: NavigationType;
}

interface State {
  user: null | User;
}

class EditProfileScreen extends Component<Props> {
  state: State = {
    user: null,
  };

  async componentDidMount() {
    const query = USER_DETAILS;
    const { data } = await client.query({ query });
    return this.setState({ user: data.me });
  }

  onPress() {
    const { navigation } = this.props;
    return navigation.pop();
  }

  userDetails() {
    const { navigation } = this.props;
    const { user } = this.state;
    const { editProfile, password } = labels;
    const { bold, text, title } = styles;

    const onPress = () =>
      navigation.navigate("EditPassword", {
        onPress: () => this.onPress(),
      });

    if (user) {
      return (
        <View style={styles.userDetails}>
          <Title style={title} text={editProfile.otherInformation} />
          <Text style={[text, bold]}>{user.name}</Text>
          <Text style={text}>{user.email}</Text>
          <ButtonOutline label={password.action} onPress={() => onPress()} />
        </View>
      );
    }

    return null;
  }

  render() {
    const { backToText, navigation } = this.props;
    const { title } = labels.editProfile;

    return (
      <BackgroundContainer>
        <BackButton navigation={navigation} text={backToText} />
        <ScrollView style={styles.scrollView}>
          <Title text={title} large />
          <FormAddProfilePicture
            navigation={navigation}
            onPress={() => this.onPress()}
          />
          {this.userDetails()}
        </ScrollView>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
  },
  bold: {
    fontSize: typography.fontSizeL,
    fontWeight: "bold",
  },
  scrollView: {
    backgroundColor: colours.whiteTransparent,
    borderTopLeftRadius: layout.borderRadiusL,
    borderTopRightRadius: layout.borderRadiusL,
    height: "100%",
    padding: layout.spacingL,
  },
  text: {
    fontSize: typography.fontSize,
    paddingBottom: layout.spacingXS,
  },
  title: {
    paddingVertical: layout.spacing,
  },
  userDetails: {
    alignItems: "flex-start",
  },
});

const wrappedEditProfileScreen = withMappedNavigationParams()(
  EditProfileScreen,
);
export {
  wrappedEditProfileScreen as EditProfileScreen,
  EditProfileScreen as UnwrappedEditProfileScreen,
};
