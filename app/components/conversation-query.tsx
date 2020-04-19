import React, { Component } from "react";
import { Keyboard, RefreshControl, ScrollView, View } from "react-native";
import { Query } from "react-apollo";

import { ErrorMessage, Loading, MessageList } from "components";
import { Conversation, NavigationType, User } from "interfaces";
import { CONVERSATION_SUBSCRIPTION, MESSAGE_FEED } from "queries";
import { bugTracker } from "utils";

interface Props {
  currentUserId: User["id"];
  id: Conversation["id"];
  navigation: NavigationType;
}

interface State {
  before: null | string;
  shouldScrollToBottom: boolean;
}

const last = 10;

class ConversationQuery extends Component<Props, State> {
  scrollView;
  keyboardDidShowListener = Keyboard.addListener(
    "keyboardDidShow",
    this.keyboardDidShow.bind(this),
  );

  state = {
    before: null,
    shouldScrollToBottom: true,
  };

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
  }

  keyboardDidShow() {
    this.scrollView.scrollToEnd();
  }

  shouldUpdateState(data) {
    const { before } = this.state;
    const firstMessageId = data.messageFeed.messages[0].id;

    if (firstMessageId !== before) {
      this.setState({ before: firstMessageId });
    }
  }

  async fetchMore(fetchMore) {
    const { before } = this.state;

    fetchMore({
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        const newMessages = fetchMoreResult.messageFeed.messages;

        const firstMessageId = newMessages[0].id;
        this.setState({ before: firstMessageId });

        return Object.assign({}, prev, {
          messageFeed: Object.assign({}, prev.messageFeed, {
            messages: [...newMessages, ...prev.messageFeed.messages],
          }),
        });
      },
      variables: { before },
    });
  }

  renderError(error) {
    return (
      <View>
        <ErrorMessage error={error} />
      </View>
    );
  }

  render() {
    const { id, currentUserId, navigation } = this.props;
    const { shouldScrollToBottom } = this.state;

    const subscribeToNewMessages = subscribeToMore => {
      subscribeToMore({
        document: CONVERSATION_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;

          this.setState({ shouldScrollToBottom: true });

          const newMessageItem =
            subscriptionData.data.conversationSubscription.node;
          return Object.assign({}, prev, {
            messageFeed: Object.assign({}, prev.messageFeed, {
              messages: [...prev.messageFeed.messages, newMessageItem],
            }),
          });
        },
        variables: { id },
      });
    };

    return (
      <Query
        query={MESSAGE_FEED}
        variables={{ conversationId: id, last }}
        partialRefetch={true}
      >
        {args => {
          if (args.networkStatus === 1) {
            return <Loading blueMode />;
          }

          if (args.error) {
            bugTracker.notify(args.error);
            return this.renderError(args.error);
          }

          if (args.data) {
            this.shouldUpdateState(args.data);

            return (
              <ScrollView
                onContentSizeChange={() => {
                  if (shouldScrollToBottom) {
                    this.scrollView.scrollToEnd({ animate: false });
                    this.setState({ shouldScrollToBottom: false });
                  }
                }}
                ref={ref => (this.scrollView = ref)}
                refreshControl={
                  <RefreshControl
                    refreshing={args.networkStatus === 4}
                    onRefresh={() => this.fetchMore(args.fetchMore)}
                  />
                }
              >
                <MessageList
                  conversation={args.data.messageFeed}
                  currentUserId={currentUserId}
                  navigation={navigation}
                  subscribeToNewMessages={() =>
                    subscribeToNewMessages(args.subscribeToMore)
                  }
                />
              </ScrollView>
            );
          }

          return null;
        }}
      </Query>
    );
  }
}

export { ConversationQuery };
