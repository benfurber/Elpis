import React, { Component } from "react";

import { Post } from "components";
import { NavigationType } from "interfaces";

interface Props {
  navigation: NavigationType;
}

class PostScreen extends Component<Props> {
  getPost() {
    const { navigation } = this.props;

    let post;
    if (navigation) {
      post = navigation.getParam("post", null);
    }
    return post;
  }

  render() {
    return <Post navigation={this.props.navigation} post={this.getPost()} />;
  }
}

export { PostScreen };
