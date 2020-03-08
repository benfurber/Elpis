import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import {
  BackgroundContainer,
  ButtonSubmit,
  Loading,
  Logo,
  Post,
} from "components";
import { Post as PostType, NavigationType } from "interfaces";
import { labels } from "labels";
import { FEED } from "queries";
import { layout } from "styles";
import { client, Analytics } from "utils";

const first = 6;

interface Props {
  navigation: NavigationType;
}

interface State {
  feed: Array<PostType>;
  isAllLoaded: boolean;
  isLoading: boolean;
  skip: number;
}

class FeedScreen extends Component<Props, State> {
  state = {
    feed: [],
    isAllLoaded: false,
    isLoading: true,
    skip: -first,
  };

  componentDidMount() {
    Analytics.track("Feed");
    this.fetchFeed();
  }

  async fetchFeed() {
    const { feed } = this.state;
    const skip = this.state.skip + first;
    this.setState({ isLoading: true, skip });

    const query = FEED;
    const variables = { first, skip };
    const result = await client.query({ query, variables });
    this.setState({ feed: [...feed, ...result.data.feed], isLoading: false });
    if (result.data.feed.length === 0) {
      this.setState({ isAllLoaded: true });
    }
  }

  renderFooter() {
    const { isLoading, isAllLoaded } = this.state;

    return (
      <View style={styles.footer}>
        <ButtonSubmit
          label={isAllLoaded ? labels.allPostsLoaded : labels.morePosts}
          display={isLoading || isAllLoaded ? "loading" : "active"}
          onPress={() => this.fetchFeed()}
        />
      </View>
    );
  }

  render() {
    const { feed } = this.state;

    return (
      <BackgroundContainer style={styles.container}>
        <FlatList
          data={feed}
          initialNumToRender={2}
          keyExtractor={({ id }) => id}
          ListEmptyComponent={<Loading blueMode />}
          ListHeaderComponent={<Logo />}
          ListFooterComponent={this.renderFooter()}
          renderItem={({ item }) => (
            <Post navigation={this.props.navigation} post={item} feed />
          )}
        />
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  footer: {
    paddingBottom: layout.spacingL + layout.spacing,
    paddingHorizontal: layout.spacingL,
    paddingTop: layout.spacing,
  },
});

export { FeedScreen };
