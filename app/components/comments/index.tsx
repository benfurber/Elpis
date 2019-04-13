import React from "react";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";

import { Title } from "components";
import { NavigationType, Post } from "interfaces";
import { colours, layout, typography } from "styles";
import { firstSentence } from "utils";

import { Comment } from "./comment";

const labels = {
  comments: "Comentários",
  topics: "Tópicos",
  noComments: "Nenhum comentário ainda - faça o primeiro!"
};

interface Props {
  comments: Post["comments"];
  description: Post["description"];
  navigation: NavigationType;
}

const Comments = (props: Props) => {
  const renderDescription = () => {
    if (props.description) {
      return (
        <View style={styles.titleContainer}>
          <Title text={firstSentence(props.description)} />
        </View>
      );
    }
  };

  const renderComments = () => {
    if (totalComments() === 0) {
      return noComments();
    }

    return (
      <ScrollView>
        <View style={styles.commentsHeadingContainer}>
          <Title text={titleText} />
        </View>
        {commentsLoop()}
      </ScrollView>
    );
  };

  const commentsLoop = () => {
    return (
      <FlatList
        data={props.comments}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Comment item={item} navigation={props.navigation} />
        )}
      />
    );
  };

  const noComments = () => {
    return (
      <View style={styles.noComments}>
        <Title text={labels.noComments} />
      </View>
    );
  };

  const totalComments = () => {
    let runningTotal = 0;
    props.comments.forEach(comment => {
      runningTotal = +comment.totalReplies;
    });

    return runningTotal;
  };

  const titleText = `${totalComments()} ${labels.comments} - ${
    props.comments.length
  } ${labels.topics}`;

  return (
    <View style={styles.container}>
      {renderDescription()}
      {renderComments()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.whiteTransparent,
    borderTopRightRadius: layout.borderRadius,
    width: "100%"
  },
  commentsHeadingContainer: {
    marginBottom: layout.spacing,
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
