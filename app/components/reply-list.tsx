import React, { Component } from "react";
import { FlatList, View } from "react-native";

import { BackButton, Comment, Query, Reply } from "components";
import {
  Comment as CommentType,
  NavigationType,
  Reply as ReplyInterface,
} from "interfaces";
import { labels } from "labels";
import { COMMENT_WITH_REPLIES } from "queries";
import { layout } from "styles";

import { NoContent } from "./comments/no-content";

interface Props {
  backButtonOnPress: () => void;
  id: string;
  navigation: NavigationType;
}

interface State {
  comment: CommentType | null;
  postId: string | null;
}

class ReplyList extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      comment: null,
      postId: null,
    };
  }

  renderList = ({ comment }) => {
    const { backButtonOnPress, navigation } = this.props;
    const { toTopics } = labels.back;

    if (comment) {
      return (
        <FlatList
          contentContainerStyle={{ paddingBottom: layout.spacingXL }}
          data={comment.replies}
          ListEmptyComponent={<NoContent text={labels.noReplies} />}
          ListHeaderComponent={
            <View>
              <BackButton
                navigation={navigation}
                text={toTopics}
                onPress={() => backButtonOnPress()}
              />
              <Comment item={comment} navigation={navigation} />
            </View>
          }
          initialNumToRender={5}
          keyExtractor={({ id }) => id}
          renderItem={({ item }: { item: ReplyInterface }) => (
            <Reply navigation={navigation} item={item} />
          )}
        />
      );
    }
  };

  render() {
    const { id } = this.props;

    return (
      <Query
        query={COMMENT_WITH_REPLIES}
        variables={{ id }}
        pollInterval={5000}
        blueMode
      >
        {this.renderList}
      </Query>
    );
  }
}

export { ReplyList };
