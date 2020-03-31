import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { ButtonAddReply, Query } from "components";
import { Comment, NavigationType, Post } from "interfaces";
import { labels } from "labels";
import { colours, layout } from "styles";
import { Analytics } from "utils";
import { COMMENTS } from "queries";

import { CommentsLoop } from "./comments-loop";
import { Header } from "./header";

interface Props {
  backToText?: string;
  commentId?: Comment["id"];
  navigation: NavigationType;
  post: Post;
  setCommentId: (string) => void;
  totalComments: number;
}

interface State {
  commentId: null | string;
}

class Comments extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      commentId: props.commentId || null,
    };
  }

  componentDidMount() {
    Analytics.trackContent({
      contentId: this.props.post.id,
      contentType: "Comments",
    });
  }

  header() {
    const { content, title } = this.props.post;
    return <Header content={content} title={title} />;
  }

  renderAllComments = data => {
    const { backToText, navigation, totalComments } = this.props;

    return (
      <CommentsLoop
        backToText={backToText}
        comments={data.post.comments}
        header={this.header()}
        navigation={navigation}
        noComments={labels.noComments}
        postId={data.post.id}
        totalComments={totalComments}
      />
    );
  };

  renderDisplay() {
    const { id } = this.props.post;

    return (
      <Query query={COMMENTS} variables={{ id }} pollInterval={5000} blueMode>
        {this.renderAllComments}
      </Query>
    );
  }

  render() {
    const { navigation, post } = this.props;
    const { commentId } = this.state;

    return (
      <View style={styles.container}>
        {this.renderDisplay()}
        <ButtonAddReply
          commentId={commentId}
          navigation={navigation}
          postId={post.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.whiteTransparent,
    borderTopRightRadius: layout.borderRadius,
    flex: 1,
    width: "100%",
  },
  noComments: {
    paddingHorizontal: layout.spacing,
    paddingVertical: layout.spacingL,
  },
});

export { Comments };
