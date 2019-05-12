import React, { Component } from "react";
import { FlatList, StyleSheet, View, ScrollView } from "react-native";

import { Post } from "interfaces";
import { colours, layout } from "styles";
import { totalComments } from "utils";

import { Comment } from "./comment";
import { NoContent } from "./no-content";
import { Title } from "components";

const labels = {
  comments: "Comentários",
  topics: "Tópicos"
};

interface Props {
  comments: Post["comments"];
  header: object;
  noComments: string;
  onPress: (number) => any;
}

class CommentsLoop extends Component<Props> {
  noComments() {
    if (totalComments(this.props.comments) === 0) {
      return <NoContent text={this.props.noComments} />;
    }
  }

  title() {
    const { comments } = this.props;

    const titleText = `${totalComments(comments)} ${labels.comments} - ${
      comments.length
    } ${labels.topics}`;

    return (
      <View style={styles.commentsHeadingContainer}>
        <Title text={titleText} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.props.header}
          {this.title()}

          {this.noComments()}

          <FlatList
            data={this.props.comments}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <Comment
                item={item}
                onPress={commentId => this.props.onPress(commentId)}
              />
            )}
          />
        </ScrollView>
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
  }
});

export { CommentsLoop };
