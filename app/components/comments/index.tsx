import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Mutation } from "react-apollo";

import { Query, TextField } from "components";
import { NavigationType, Post } from "interfaces";
import { labels } from "labels";
import { colours, layout } from "styles";
import { Analytics } from "utils";
import { comments, commentWithReplies } from "queries";
import { addComment } from "mutations";

import { CommentsLoop } from "./comments-loop";
import { Header } from "./header";
import { Replies } from "./replies";

interface Props {
  comments: Post["comments"];
  description: Post["content"];
  navigation: NavigationType;
  postId: Post["id"];
}

interface State {
  textInput: string;
  commentId: null | string;
}

class Comments extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      commentId: null,
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
      <Header
        comments={this.props.comments}
        description={this.props.description}
      />
    );
  }

  onChangeText = string => {
    this.setState({ textInput: string });
  };

  onSubmit(createComment) {
    createComment({
      variables: {
        content: this.state.textInput,
        id: this.props.postId,
      },
    }).then(() => {
      this.setState({ textInput: "" });
    });
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

  renderAddResponse() {
    const { commentId } = this.state;

    if (commentId !== null) {
      return (
        <TextField
          buttonText={labels.reply}
          inputText={labels.addYourReply}
          onChangeText={string => this.onChangeText(string)}
          onSubmit={() => this.onSubmit()}
          value={this.state.textInput}
        />
      );
    }

    return (
      <Mutation mutation={addComment}>
        {(createComment, {}) => (
          <TextField
            buttonText={labels.comment}
            inputText={labels.addYourComment}
            onChangeText={string => this.onChangeText(string)}
            onSubmit={() => this.onSubmit(createComment)}
            value={this.state.textInput}
          />
        )}
      </Mutation>
    );
  }

  renderDisplay() {
    const { commentId } = this.state;
    const { postId } = this.props;

    if (commentId !== null) {
      return (
        <Query
          query={commentWithReplies}
          variables={{ id: commentId }}
          pollInterval={2000}
          blueMode
        >
          {this.renderReplies}
        </Query>
      );
    }

    return (
      <Query
        query={comments}
        variables={{ id: postId }}
        pollInterval={2000}
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
    return (
      <View style={styles.container}>
        {this.renderDisplay()}
        {this.renderAddResponse()}
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
  commentsHeadingContainer: {
    marginVertical: layout.spacingL,
    marginHorizontal: layout.spacing,
  },
  scrollView: {
    paddingBottom: layout.spacingXL,
  },
  titleContainer: {
    backgroundColor: colours.whiteTransparent,
    borderRadius: layout.borderRadius,
    margin: layout.spacing,
    padding: layout.spacing,
  },
  noComments: {
    paddingHorizontal: layout.spacing,
    paddingVertical: layout.spacingL,
  },
});

export { Comments };
