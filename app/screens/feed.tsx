import React, { Component } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

import { BackgroundContainer, Logo, Post, Query } from "components";
import { NavigationType } from "interfaces";
import { allPosts } from "../queries";
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
        data={data.findAllPosts}
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
        <ScrollView>
          <View style={styles.logo}>
            <Logo />
          </View>
          <View style={styles.feedBody}>
            <Query query={allPosts}>{this.postsLoop}</Query>
          </View>
        </ScrollView>
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
  feedBody: { flex: 6 },
  logo: {
    flex: 1,
    alignItems: "stretch",
  },
});

export { FeedScreen };
