import React, { Component } from "react";

import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { BackgroundContainer, Post, Query } from "components";
import { NavigationType, Post as PostInterface } from "interfaces";
import { POST } from "queries";

interface Props {
  navigation: NavigationType;
  id?: string;
  commentId?: string;
  post?: PostInterface;
  setDisplay?: string;
}

class PostScreen extends Component<Props> {
  post = (data: { post: PostInterface }) => {
    const { commentId, setDisplay } = this.props;

    return (
      <Post
        navigation={this.props.navigation}
        post={data.post}
        setDisplay={setDisplay}
        commentId={commentId}
      />
    );
  };

  render() {
    const { navigation, id, post, setDisplay } = this.props;

    if (!post) {
      return (
        <BackgroundContainer>
          <Query query={POST} variables={{ id }}>
            {this.post}
          </Query>
        </BackgroundContainer>
      );
    }

    return (
      <BackgroundContainer>
        <Post
          navigation={navigation}
          post={post}
          setDisplay={setDisplay ? setDisplay : "post"}
        />
      </BackgroundContainer>
    );
  }
}

const wrappedPostScreen = withMappedNavigationParams()(PostScreen);
export { wrappedPostScreen as PostScreen, PostScreen as UnwrappedPostScreen };
