import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { ButtonAddReply, Query } from "components";
import { Comment, NavigationType, Post } from "interfaces";
import { labels } from "labels";
import { colours, layout } from "styles";
import { Analytics } from "utils";
import { COMMENTS, COMMENT_WITH_REPLIES } from "queries";

import { CommentsLoop } from "./comments-loop";
import { Header } from "./header";
import { Replies } from "./replies";

interface Props {
  commentId?: Comment["id"];
  navigation: NavigationType;
  post: Post;
  setCommentId: (string) => void;
}

interface State {
  commentId: null | string;
}

class Comments extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      commentId: this.props.commentId || null,
    };
  }

  componentDidMount() {
    Analytics.trackContent({
      contentId: this.props.post.id,
      contentType: "Comments",
    });
  }

  setDisplay(commentId: string | null) {
    this.setState({ commentId });
    this.props.setCommentId(commentId);
  }

  header() {
    const { content, title } = this.props.post;
    return <Header content={content} title={title} />;
  }

  selectComment() {
    const { comments } = this.props.post;
    const { commentId } = this.state;

    return comments.filter(comment => {
      if (comment.id == commentId) {
        return comment;
      }
    })[0];
  }

  renderAllComments = data => {
    return (
      <CommentsLoop
        comments={data.post.comments}
        header={this.header()}
        noComments={labels.noComments}
        onPress={commentId => this.setDisplay(commentId)}
      />
    );
  };

  renderDisplay() {
    const { commentId } = this.state;
    const { id } = this.props.post;

    if (commentId !== null) {
      return (
        <Query
          query={COMMENT_WITH_REPLIES}
          variables={{ id: commentId }}
          pollInterval={5000}
          blueMode
        >
          {this.renderReplies}
        </Query>
      );
    }

    return (
      <Query query={COMMENTS} variables={{ id }} pollInterval={5000} blueMode>
        {this.renderAllComments}
      </Query>
    );
  }

  renderReplies = data => {
    const { navigation } = this.props;

    return (
      <Replies
        item={data.comment}
        navigation={navigation}
        noReplies={labels.noReplies}
        onPress={() => this.setDisplay(null)}
      />
    );
  };

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
