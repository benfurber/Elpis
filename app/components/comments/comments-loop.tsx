import React, { Component } from "react";
import { FlatList, StyleSheet, View, ScrollView } from "react-native";

import { Post, NavigationType } from "interfaces";
import { labels } from "labels";
import { colours, layout } from "styles";
import { calculateTotalComments } from "utils";

import { Comment } from "./comment";
import { NoContent } from "./no-content";
import { Title } from "components";

interface Props {
  comments: Post["comments"];
  header: object;
  navigation: NavigationType;
  noComments: string;
  onPress: (number) => void;
  postId: Post["id"];
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
    const { navigation, postId } = this.props;

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
                navigation={navigation}
                onPress={commentId => this.props.onPress(commentId)}
                postId={postId}
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
    paddingBottom: layout.spacingL,
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
