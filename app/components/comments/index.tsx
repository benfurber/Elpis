import React, { Component } from "react";
import { FlatList, StyleSheet, View, ScrollView } from "react-native";

import { Title } from "components";
import { NavigationType, Post } from "interfaces";
import { colours, layout } from "styles";
import { firstSentence } from "utils";

import { Comment } from "./comment";
import { TextField } from "components";

const labels = {
  addYourComment: "Adicione o seu comentário...",
  comment: "Comentar",
  comments: "Comentários",
  topics: "Tópicos",
  noComments: "Nenhum comentário ainda - faça o primeiro!"
};

interface Props {
  comments: Post["comments"];
  description: Post["description"];
  navigation: NavigationType;
}

interface State {
  textInput: string;
}

class Comments extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      textInput: ""
    };
  }

  renderDescription = () => {
    if (this.props.description) {
      return (
        <View style={styles.titleContainer}>
          <Title text={firstSentence(this.props.description)} />
        </View>
      );
    }
  };

  commentsLoop() {
    return (
      <View>
        {this.noComments()}

        <FlatList
          data={this.props.comments}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Comment item={item} navigation={this.props.navigation} />
          )}
        />
      </View>
    );
  }

  noComments() {
    if (this.totalComments() === 0) {
      return (
        <View style={styles.noComments}>
          <Title text={labels.noComments} />
        </View>
      );
    }
  }

  totalComments() {
    let runningTotal = this.props.comments.length;

    this.props.comments.forEach(comment => {
      runningTotal += comment.totalReplies;
    });

    return runningTotal;
  }

  onChangeText = string => {
    this.setState({ textInput: string });
  };

  onSubmit() {
    console.log(this.state.textInput);
  }

  render() {
    const titleText = `${this.totalComments()} ${labels.comments} - ${
      this.props.comments.length
    } ${labels.topics}`;

    return (
      <View style={styles.container}>
        <ScrollView>
          {this.renderDescription()}

          <View style={styles.commentsHeadingContainer}>
            <Title text={titleText} />
          </View>

          {this.commentsLoop()}
        </ScrollView>

        <TextField
          buttonText={labels.comment}
          inputText={labels.addYourComment}
          onChangeText={string => this.onChangeText(string)}
          onSubmit={() => this.onSubmit()}
          value={this.state.textInput}
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
    width: "100%"
  },
  commentsHeadingContainer: {
    marginVertical: layout.spacingL,
    marginHorizontal: layout.spacing
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
