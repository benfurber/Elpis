import React, { Component } from "react";
import { FlatList, StyleSheet, View, ScrollView } from "react-native";

import { Post } from "interfaces";
import { labels } from "labels";
import { colours, layout } from "styles";
import { calculateTotalComments } from "utils";

import { Comment } from "./comment";
import { NoContent } from "./no-content";
import { Title } from "components";

interface Props {
  comments: Post["comments"];
  header: object;
  noComments: string;
  onPress: (number) => void;
}

class CommentsLoop extends Component<Props> {
  noComments() {
    if (calculateTotalComments(this.props.comments) === 0) {
      return <NoContent text={this.props.noComments} />;
    }
  }

  title() {
    const { comments } = this.props;

    const titleText = `${comments.length} ${labels.topics}`;

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
            contentContainerStyle={{ paddingBottom: layout.spacingXL }}
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
  commentsHeadingContainer: {
    marginHorizontal: layout.spacing,
    marginVertical: layout.spacingL,
  },
  container: {
    flex: 1,
    width: "100%",
  },
  titleContainer: {
    backgroundColor: colours.whiteTransparent,
    borderRadius: layout.borderRadius,
    margin: layout.spacing,
    padding: layout.spacing,
  },
});

export { CommentsLoop };
