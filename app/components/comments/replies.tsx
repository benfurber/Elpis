import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";

import { Comment as CommentType, NavigationType, Post } from "interfaces";
import { labels } from "labels";
import { layout } from "styles";
import { Analytics } from "utils";

import { Comment } from "./comment";
import { NoContent } from "./no-content";
import { Reply } from "./reply";

interface Props {
  item: CommentType;
  navigation: NavigationType;
  noReplies: string;
  onPress: Function;
  postId: Post["id"];
}

class Replies extends Component<Props> {
  componentDidMount() {
    Analytics.trackContent({
      contentId: this.props.item.id,
      contentType: "Replies",
    });
  }

  repliesLoop() {
    const { navigation } = this.props;

    return (
      <FlatList
        contentContainerStyle={{ paddingBottom: layout.spacingXL }}
        data={this.props.item.replies}
        initialNumToRender={5}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Reply navigation={navigation} item={item} />}
      />
    );
  }

  renderReplies() {
    const { totalReplies } = this.props.item;

    if (totalReplies > 0) {
      return (
        <View>
          <Text style={styles.subHeading}>
            {totalReplies} {labels.replies}
          </Text>
          {this.repliesLoop()}
        </View>
      );
    }

    return <NoContent text={this.props.noReplies} />;
  }

  render() {
    const { item, navigation, postId } = this.props;

    return (
      <View>
        <TouchableOpacity onPress={() => this.props.onPress()}>
          <Text style={styles.link}>&#60; {labels.back.toTopics}</Text>
        </TouchableOpacity>

        <Comment item={item} navigation={navigation} postId={postId} />

        {this.renderReplies()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  link: {
    fontStyle: "italic",
    marginHorizontal: layout.spacingS,
    padding: layout.spacing,
  },
  subHeading: {
    fontStyle: "italic",
    fontWeight: "bold",
    paddingHorizontal: layout.spacing,
    paddingVertical: layout.spacingS,
  },
});

export { Replies };
