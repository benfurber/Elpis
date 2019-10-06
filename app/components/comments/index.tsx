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
  comments: Post["comments"];
  content: Post["content"];
  navigation: NavigationType;
  postId: Post["id"];
  commentId?: Comment["id"];
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
      contentType: "Comments",
      contentId: this.props.postId,
    });
  }

  setDisplay(commentId: string | null) {
    this.setState({
      commentId,
    });
  }

  header() {
    return (
      <Header comments={this.props.comments} content={this.props.content} />
    );
  }

  selectComment() {
    const { comments } = this.props;
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
    const { postId } = this.props;

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
      <Query
        query={COMMENTS}
        variables={{ id: postId }}
        pollInterval={5000}
        blueMode
      >
        {this.renderAllComments}
      </Query>
    );
  }

  renderReplies = data => {
    return (
      <Replies
        header={this.header()}
        item={data.comment}
        noReplies={labels.noReplies}
        onPress={() => this.setDisplay(null)}
      />
    );
  };

  render() {
    const { navigation, postId } = this.props;
    const { commentId } = this.state;

    return (
      <View style={styles.container}>
        {this.renderDisplay()}
        <ButtonAddReply
          commentId={commentId}
          navigation={navigation}
          postId={postId}
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
