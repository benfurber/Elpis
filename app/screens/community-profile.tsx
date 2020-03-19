import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { withMappedNavigationParams } from "react-navigation-props-mapper";

import {
  BackgroundContainer,
  ButtonClose,
  CommunityDetails,
  Loading,
} from "components";
import { Community, NavigationType } from "interfaces";
import { COMMUNITY } from "queries";
import { colours, layout } from "styles";
import { Analytics, client } from "utils";

interface Props {
  navigation: NavigationType;
  communityId: Community["id"];
}

interface State {
  community: null | Community;
  isLoading: boolean;
}

class CommunityProfileScreen extends Component<Props, State> {
  state = {
    community: null,
    isLoading: true,
  };

  async fetchUser() {
    const { communityId } = this.props;

    const query = COMMUNITY;
    const variables = { id: communityId };

    const result = await client.query({ query, variables });
    this.setState({ community: result.data.community, isLoading: false });
  }

  componentDidMount() {
    Analytics.track("Community Profile");
    this.fetchUser();
  }

  render() {
    const { navigation } = this.props;
    const { isLoading, community } = this.state;

    return (
      <BackgroundContainer header={<ButtonClose navigation={navigation} />}>
        <View style={styles.container}>
          {isLoading && <Loading blueMode />}
          {community && (
            <CommunityDetails navigation={navigation} community={community} />
          )}
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

const wrappedCommunityProfileScreen = withMappedNavigationParams()(
  CommunityProfileScreen,
);
export {
  wrappedCommunityProfileScreen as CommunityProfileScreen,
  CommunityProfileScreen as UnwrappedCommunityProfileScreen,
};
