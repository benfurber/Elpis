import React, { Component } from "react";
import { FlatList } from "react-native";

import { BackgroundContainer, Logo, Post, Query } from "components";
import { Feed, NavigationType } from "interfaces";
import { FEED } from "queries";
import { Analytics } from "utils";

interface Props {
  navigation: NavigationType;
}

class FeedScreen extends Component<Props> {
  componentDidMount() {
    Analytics.track("Feed");
  }

  postsLoop = (data: Feed) => {
    return (
      <FlatList
        data={data.feed}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={<Logo />}
        renderItem={({ item }) => (
          <Post navigation={this.props.navigation} post={item} feed />
        )}
      />
    );
  };

  render() {
    return (
      <BackgroundContainer>
        <Query query={FEED}>{this.postsLoop}</Query>
      </BackgroundContainer>
    );
  }
}

export { FeedScreen };
