import React, { Component } from "react";

import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { BackgroundContainer, NoContent, Post } from "components";
import { NavigationType, Post as PostInterface } from "interfaces";

interface Props {
  navigation: NavigationType;
  post?: PostInterface;
  setDisplay?: string;
}

class PostScreen extends Component<Props> {
  render() {
    const { navigation, post, setDisplay } = this.props;

    if (!post) {
      return <NoContent navigation={navigation} />;
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
