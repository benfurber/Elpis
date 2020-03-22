import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { withMappedNavigationParams } from "react-navigation-props-mapper";

import {
  BackgroundContainer,
  ButtonClose,
  Loading,
  UserDetails,
} from "components";
import { NavigationType, User } from "interfaces";
import { USER } from "queries";
import { colours, layout } from "styles";
import { Analytics, client } from "utils";

interface Props {
  navigation: NavigationType;
  userId: User["id"];
}

interface State {
  isLoading: boolean;
  user: null | User;
}

class UserProfileScreen extends Component<Props, State> {
  state = {
    isLoading: true,
    user: null,
  };

  async fetchUser() {
    const { userId } = this.props;

    const query = USER;
    const variables = { id: userId };

    const result = await client.query({ query, variables });
    this.setState({ isLoading: false, user: result.data.user });
  }

  componentDidMount() {
    Analytics.track("User Profile");
    this.fetchUser();
  }

  render() {
    const { navigation } = this.props;
    const { isLoading, user } = this.state;

    return (
      <BackgroundContainer header={<ButtonClose navigation={navigation} />}>
        <View style={styles.container}>
          {isLoading && <Loading blueMode />}
          {user && <UserDetails navigation={navigation} user={user} />}
        </View>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colours.whiteTransparent,
    borderTopLeftRadius: layout.borderRadiusL,
    borderTopRightRadius: layout.borderRadiusL,
    height: "100%",
    padding: layout.spacingL,
  },
});

const wrappedUserProfileScreen = withMappedNavigationParams()(
  UserProfileScreen,
);
export {
  wrappedUserProfileScreen as UserProfileScreen,
  UserProfileScreen as UnwrappedUserProfileScreen,
};
