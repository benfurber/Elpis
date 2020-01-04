import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Comments } from "components";
import { NavigationType, Post as PostInterface } from "interfaces";
import { labels } from "labels";
import { layout } from "styles";
import { calculateTotalComments } from "utils";

import { Content } from "./content";
import { Footer } from "./footer";
import { Tabs } from "./tabs";

interface Props {
  navigation: NavigationType;
  post: PostInterface;
  feed?: true;
  setDisplay?: string;
  styles?: object;
  commentId?: string;
}

interface State {
  display: string;
}

class Post extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      display: "body",
    };
  }

  componentDidMount() {
    if (this.props.setDisplay) {
      this.setState({ display: this.props.setDisplay });
    }
  }

  fullHeight() {
    if (this.state.display !== "body") {
      return styles.fullHeight;
    }
  }

  onPressComments() {
    return () => this.navigate("comments");
  }

  onPressPost() {
    return () => this.navigate("body");
  }

  navigate(setDisplay: string) {
    const { navigation, feed, post } = this.props;

    if (!feed) {
      this.setState({ display: setDisplay });
    }

    return navigation.navigate("Post", {
      backToText: labels.back.toFeed,
      post,
      setDisplay,
    });
  }

  renderBody() {
    const { author, content, createdAt, imagePath } = this.props.post;
    return (
      <View style={styles.container}>
        <Content
          createdAt={createdAt}
          content={content}
          imagePath={imagePath}
        />
        <Footer avatarPath={author.avatarPath} />
      </View>
    );
  }

  renderComments() {
    const { commentId, post } = this.props;
    const { comments, content, id } = post;

    return (
      <Comments
        comments={comments}
        content={content}
        navigation={this.props.navigation}
        postId={id}
        commentId={commentId}
      />
    );
  }

  renderContent() {
    switch (this.state.display) {
      case "body":
        return this.renderBody();
      case "comments":
        return this.renderComments();
      default:
        return this.renderBody();
    }
  }

  render() {
    const totalComments = calculateTotalComments(this.props.post.comments);

    return (
      <View style={[this.fullHeight(), this.props.styles]}>
        <Tabs
          onPressComments={this.onPressComments()}
          onPressPost={this.onPressPost()}
          display={this.state.display}
          totalComments={totalComments}
        />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: layout.spacingL,
  },
  fullHeight: {
    alignItems: "stretch",
    height: "100%",
  },
});

export { Post };
