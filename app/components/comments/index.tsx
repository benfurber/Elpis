import React, { Component } from "react";
import { FlatList, StyleSheet, View, ScrollView } from "react-native";

import { TextField, Title } from "components";
import { NavigationType, Post } from "interfaces";
import { colours, layout } from "styles";
import { totalComments } from "utils";

import { CommentsLoop } from "./comments-loop";
import { Header } from "./header";
import { Replies } from "./replies";

const labels = {
  addYourComment: "Adicione o seu comentário...",
  addYourReply: "Adicione o seu resposta...",
  comment: "Comentar",
  comments: "Comentários",
  reply: "Resposta",
  topics: "Tópicos",
  noComments: "Nenhum comentário ainda - faça o primeiro!",
  noReplies: "Nenhuma resposta ainda - faça a primeira!"
};

interface Props {
  comments: Post["comments"];
  description: Post["description"];
  navigation: NavigationType;
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
      commentId: null
    };
  }

  setDisplay(commentId) {
    this.setState({
      commentId
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

  onSubmit() {
    console.log(this.state.textInput);
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

  renderAllComments() {
    return (
      <CommentsLoop
        comments={this.props.comments}
        header={this.header()}
        noComments={labels.noComments}
        onPress={commentId => this.setDisplay(commentId)}
      />
    );
  }

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
      <TextField
        buttonText={labels.comment}
        inputText={labels.addYourComment}
        onChangeText={string => this.onChangeText(string)}
        onSubmit={() => this.onSubmit()}
        value={this.state.textInput}
      />
    );
  }

  renderDisplay() {
    const { commentId } = this.state;

    if (commentId !== null) {
      return <ScrollView>{this.renderReplies()}</ScrollView>;
    }

    return <ScrollView>{this.renderAllComments()}</ScrollView>;
  }

  renderReplies() {
    const item = this.selectComment();
    return (
      <Replies
        header={this.header()}
        item={item}
        noReplies={labels.noReplies}
        onPress={() => this.setDisplay(null)}
      />
    );
  }

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
    width: "100%"
  },
  commentsHeadingContainer: {
    marginVertical: layout.spacingL,
    marginHorizontal: layout.spacing
  },
  scrollView: {
    paddingBottom: layout.spacingXL
  },
  titleContainer: {
    backgroundColor: colours.whiteTransparent,
    borderRadius: layout.borderRadius,
    margin: layout.spacing,
    padding: layout.spacing
  },
  noComments: {
    paddingHorizontal: layout.spacing,
    paddingVertical: layout.spacingL
  }
});

export { Comments };
