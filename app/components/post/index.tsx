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
  backToText?: string;
  navigation: NavigationType;
  post: PostInterface;
  feed?: true;
  setDisplay?: string;
  styles?: object;
  commentId?: string;
}

interface State {
  commentId: string | undefined;
  display: string;
  totalComments: number;
}

class Post extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      commentId: props.commentId || undefined,
      display: "body",
      totalComments: calculateTotalComments(props.post.comments),
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
    const { backToText, navigation } = this.props;

    if (backToText) {
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
    const { backToText, post } = this.props;
    const { commentId, totalComments } = this.state;

    return (
      <Comments
        backToText={backToText}
        commentId={commentId}
        navigation={this.props.navigation}
        post={post}
        setCommentId={commentId => this.setState({ commentId })}
        totalComments={totalComments}
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
    const { totalComments } = this.state;

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
