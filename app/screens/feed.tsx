import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { BackgroundContainer, Logo, Post, Query } from "components";
import { NavigationType } from "interfaces";
import { feed } from "queries";
import { colours } from "styles";
import { Analytics } from "utils";

interface Props {
  navigation: NavigationType;
}

class FeedScreen extends Component<Props> {
  componentDidMount() {
    Analytics.track("Feed");
  }

  postsLoop = data => {
    return (
      <FlatList
        data={data.feed}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Post navigation={this.props.navigation} post={item} />
        )}
      />
    );
  };

  render() {
    return (
      <BackgroundContainer>
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.feedBody}>
          <Query query={feed}>{this.postsLoop}</Query>
        </View>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.transparentBlue,
    flex: 1,
    flexDirection: "column",
  },
  feedBody: { flex: 13 },
  logo: {
    flex: 1,
    alignItems: "stretch",
  },
});

export { FeedScreen };
