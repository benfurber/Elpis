import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { BackgroundContainer, Icon, Post, Query } from "components";
import { NavigationType, Post as PostInterface } from "interfaces";
import { labels } from "labels";
import { POST } from "queries";
import { layout } from "styles";

interface Props {
  backToText?: string;
  navigation: NavigationType;
  id?: string;
  commentId?: string;
  post?: PostInterface;
  setDisplay?: string;
}

class PostScreen extends Component<Props> {
  postWithData = (data: { post: PostInterface }) => {
    const { commentId, navigation, setDisplay } = this.props;

    return (
      <Post
        navigation={navigation}
        post={data.post}
        setDisplay={setDisplay}
        commentId={commentId}
      />
    );
  };

  fetchPost() {
    const { id } = this.props;

    return (
      <Query query={POST} variables={{ id }}>
        {this.postWithData}
      </Query>
    );
  }

  post() {
    const { navigation, post, setDisplay } = this.props;
    if (post) {
      return (
        <Post
          navigation={navigation}
          post={post}
          setDisplay={setDisplay ? setDisplay : "post"}
          styles={styles.fullHeight}
        />
      );
    }
  }

  render() {
    const { backToText, navigation, post } = this.props;

    const backText = backToText ? backToText : labels.back.back;

    return (
      <BackgroundContainer>
        <TouchableOpacity style={styles.back} onPress={() => navigation.pop()}>
          <Icon name="angle-double-left" style={styles.icon} />
          <Text>{backText}</Text>
        </TouchableOpacity>

        {post ? this.post() : this.fetchPost()}
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    flexDirection: "row",
    paddingBottom: layout.spacing,
    paddingHorizontal: layout.spacing,
  },
  fullHeight: {
    flex: 1,
  },
  icon: {
    paddingRight: layout.spacingS,
  },
});

const wrappedPostScreen = withMappedNavigationParams()(PostScreen);
export { wrappedPostScreen as PostScreen, PostScreen as UnwrappedPostScreen };
