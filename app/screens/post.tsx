import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { BackButton, BackgroundContainer, Post, Query } from "components";
import { NavigationType, Post as PostInterface } from "interfaces";
import { POST } from "queries";

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
    const { backToText, commentId, navigation, setDisplay } = this.props;

    return (
      <Post
        navigation={navigation}
        post={data.post}
        postTabAction={backToText ? true : false}
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
    const { backToText, navigation, post, setDisplay } = this.props;

    if (post) {
      return (
        <Post
          navigation={navigation}
          post={post}
          postTabAction={backToText ? true : false}
          setDisplay={setDisplay ? setDisplay : "post"}
          styles={styles.fullHeight}
        />
      );
    }
  }

  render() {
    const { backToText, navigation, post } = this.props;

    return (
      <BackgroundContainer>
        {backToText && <BackButton navigation={navigation} text={backToText} />}
        {post ? this.post() : this.fetchPost()}
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  fullHeight: {
    flex: 1,
  },
});

const wrappedPostScreen = withMappedNavigationParams()(PostScreen);
export { wrappedPostScreen as PostScreen, PostScreen as UnwrappedPostScreen };
