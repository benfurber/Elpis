import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { Comments } from "components";
import { NavigationType, Post as PostInterface } from "interfaces";
import { layout } from "styles";
import { calculateTotalComments } from "utils";

import { Content } from "./content";
import { Footer } from "./footer";
import { Tabs } from "./tabs";

interface Props {
  navigation: NavigationType;
  post: PostInterface;
  postTabAction?: boolean;
  feed?: true;
  setDisplay?: string;
  styles?: object;
  commentId?: string;
}

interface State {
  commentId: string | undefined;
  display: string;
}

class Post extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      commentId: props.commentId || undefined,
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
    const { navigation, postTabAction } = this.props;

    if (postTabAction) {
      return () => this.navigate("body");
    }
    return () => navigation.popToTop();
  }

  navigate(setDisplay: string) {
    const { navigation, feed, post } = this.props;

    if (!feed) {
      this.setState({ display: setDisplay });
    }

    return navigation.navigate("Post", {
      post,
      setDisplay,
    });
  }

  renderBody() {
    const { feed, navigation, post } = this.props;
    const { author, content, publishedAt, imagePath } = post;

    const bodyContent = (
      <Content date={publishedAt} content={content} imagePath={imagePath} />
    );
    const bodyFooter = <Footer community={author} navigation={navigation} />;

    if (feed) {
      return (
        <View style={styles.container}>
          {bodyContent}
          {bodyFooter}
        </View>
      );
    }

    return (
      <ScrollView bounces={false}>
        {bodyContent}
        {bodyFooter}
      </ScrollView>
    );
  }

  renderComments() {
    const { post } = this.props;
    const { commentId } = this.state;

    return (
      <Comments
        post={post}
        navigation={this.props.navigation}
        commentId={commentId}
        setCommentId={commentId => this.setState({ commentId })}
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
