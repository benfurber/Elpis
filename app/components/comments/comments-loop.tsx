import React, { Component } from "react";
import { SectionList, StyleSheet, Text, View, ScrollView } from "react-native";

import { Post, NavigationType } from "interfaces";
import { colours, layout } from "styles";
import { calculateTotalComments, commentsByDiscussionLevel } from "utils";

import { CommentPreview } from "./comment-preview";
import { CommentsSectionHeader } from "./comments-section-header";
import { NoContent } from "./no-content";

interface Props {
  backToText?: string;
  comments: Post["comments"];
  header: object;
  navigation: NavigationType;
  noComments: string;
  postId: Post["id"];
  totalComments: number;
}

class CommentsLoop extends Component<Props> {
  noComments() {
    if (calculateTotalComments(this.props.comments) === 0) {
      return <NoContent text={this.props.noComments} />;
    }
  }

  render() {
    const {
      backToText,
      comments,
      navigation,
      postId,
      totalComments,
    } = this.props;

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
                backToText={backToText}
                item={item}
                navigation={navigation}
                postId={postId}
                totalComments={totalComments}
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
