import React, { Component } from "react";

import { BackgroundContainer, Post } from "components";
import { NavigationType } from "interfaces";

interface Props {
  navigation: NavigationType;
}

class PostScreen extends Component<Props> {
  getPost() {
    const { navigation } = this.props;
    return navigation.getParam("post", null);
  }

  getSetDisplay() {
    const { navigation } = this.props;

    let setDisplay;
    if (navigation) {
      setDisplay = navigation.getParam("setDisplay", "body");
    }
    return setDisplay;
  }

  getParam(param: string) {
    const { navigation } = this.props;

    let theParam;
    if (navigation) {
      theParam = navigation.getParam(param);
    }
    return theParam;
  }

  render() {
    return (
      <BackgroundContainer>
        <Post
          navigation={this.props.navigation}
          post={this.getParam("post")}
          setDisplay={this.getParam("setDisplay")}
        />
      </BackgroundContainer>
    );
  }
}

export { PostScreen };
