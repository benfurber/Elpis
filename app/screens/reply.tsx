import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import {
  BackButton,
  BackgroundContainer,
  ButtonAddReply,
  ReplyList,
} from "components";
import { Comment as CommentType, NavigationType, Post } from "interfaces";
import { labels } from "labels";
import { colours } from "styles";
import { Analytics, getPostId, getTotalComments } from "utils";

import { Tabs } from "../components/post/tabs";

interface Props {
  backToText?: string;
  id: CommentType["id"];
  isFromTopic?: boolean;
  navigation: NavigationType;
  totalComments?: number;
  postId?: Post["id"];
}

interface State {
  postId: Post["id"] | null;
  totalComments: number | null;
}

class ReplyScreen extends Component<Props, State> {
  state = {
    postId: this.props.postId || null,
    totalComments: this.props.totalComments || null,
  };

  async componentDidMount() {
    const { id } = this.props;
    const { postId, totalComments } = this.state;

    Analytics.trackContent({
      contentId: id,
      contentType: "Replies",
    });

    if (totalComments === null) {
      const totalComments = await getTotalComments(id);
      totalComments && this.setState({ totalComments });
    }

    if (postId === null) {
      const postId = await getPostId(id);
      postId && this.setState({ postId });
    }
  }

  onPressComments() {
    const { backToText, isFromTopic, navigation } = this.props;
    const { postId } = this.state;

    if (isFromTopic) return navigation.pop();

    if (postId) {
      return navigation.push("Post", {
        backToText,
        id: postId,
        setDisplay: "comments",
      });
    }
  }

  onPressPost() {
    const { backToText, isFromTopic, navigation } = this.props;
    const { postId } = this.state;

    if (isFromTopic && backToText) return navigation.pop(2);
    if (isFromTopic) return navigation.popToTop();

    return navigation.push("Post", {
      backToText,
      id: postId,
      setDisplay: "body",
    });
  }

  render() {
    const { backToText, id, navigation } = this.props;
    const { totalComments } = this.state;
    const { toTopics } = labels.back;

    return (
      <BackgroundContainer>
        {backToText && (
          <BackButton
            navigation={navigation}
            onPress={() => navigation.popToTop()}
            text={backToText}
          />
        )}
        <Tabs
          onPressComments={() => this.onPressComments()}
          onPressPost={() => this.onPressPost()}
          display={"comments"}
          totalComments={totalComments || 0}
        />
        <View style={styles.container}>
          <BackButton
            navigation={navigation}
            text={toTopics}
            onPress={() => this.onPressComments()}
          />
          <ReplyList id={id} navigation={navigation} />
        </View>
        <ButtonAddReply commentId={id} navigation={navigation} />
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    backgroundColor: colours.whiteTransparent,
    flex: 1,
    width: "100%",
  },
});

const wrappedReplyScreen = withMappedNavigationParams()(ReplyScreen);
export {
  wrappedReplyScreen as ReplyScreen,
  ReplyScreen as UnwrappedReplyScreen,
};
