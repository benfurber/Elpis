import React, { Component } from "react";
import { FlatList, StyleSheet, View, ScrollView } from "react-native";

import { Title } from "components";
import { NavigationType, Post } from "interfaces";
import { colours, layout } from "styles";
import { totalComments } from "utils";

import { Comment } from "./comment";
import { Header } from "./header";
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
  display: "Comments" | "Replies";
}

class Comments extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      display: "Comments"
    };
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.display != this.state.display) {
      console.log(this.state.display);
    }
  }

  setDisplay() {
    this.setState({ display: "Replies" });
  }

  commentsLoop() {
    return (
      <View>
        {this.noComments()}

        <FlatList
          data={this.props.comments}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Comment
              item={item}
              navigation={this.props.navigation}
              onPress={() => this.setDisplay()}
            />
          )}
        />
      </View>
    );
  }

  noComments() {
    if (totalComments(this.props.comments) === 0) {
      return (
        <View style={styles.noComments}>
          <Title text={labels.noComments} />
        </View>
      );
    }
  }

  onChangeText = string => {
    this.setState({ textInput: string });
  };

  onSubmit() {
    console.log(this.state.textInput);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header
            comments={this.props.comments}
            description={this.props.description}
          />

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
