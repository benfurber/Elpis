import React, { Component } from "react";
import { SectionList, StyleSheet, Text, View, ScrollView } from "react-native";

import { Post, NavigationType } from "interfaces";
import { colours, layout } from "styles";
import { calculateTotalComments, commentsByDiscussionLevel } from "utils";

import { CommentPreview } from "./comment-preview";
import { CommentsSectionHeader } from "./comments-section-header";
import { NoContent } from "./no-content";

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

  render() {
    const { comments, navigation, postId } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>
          {this.props.header}
          {this.noComments()}

          <SectionList
            contentContainerStyle={{ paddingBottom: layout.spacingXL }}
            sections={commentsByDiscussionLevel(comments)}
            initialNumToRender={5}
            renderSectionHeader={({ section: { level } }) => (
              <CommentsSectionHeader level={level} />
            )}
            renderItem={({ item }) => (
              <CommentPreview
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
