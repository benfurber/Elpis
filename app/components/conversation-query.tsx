import React, { Component } from "react";
import { RefreshControl, ScrollView, View } from "react-native";
import { Query } from "react-apollo";

import { ErrorMessage, Loading, MessageList } from "components";
import { Conversation, NavigationType, User } from "interfaces";
import { CONVERSATION_SUBSCRIPTION, MESSAGE_FEED } from "queries";
import { bugTracker } from "utils";

interface Props {
  currentUserId: User["id"];
  id: Conversation["id"];
  navigation: NavigationType;
  setFeedScrollView: any;
}

interface State {
  before: null | string;
}

class ConversationQuery extends Component<Props, State> {
  scrollView;

  state = {
    before: null,
  };

  componentDidMount() {
    this.props.setFeedScrollView(this.scrollView);
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
      variables: {
        before,
      },
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

    const subscribeToNewMessages = subscribeToMore => {
      subscribeToMore({
        document: CONVERSATION_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
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
        variables={{ conversationId: id, last: 1 }}
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
                ref={ref => {
                  this.scrollView = ref;
                }}
                onContentSizeChange={() => this.scrollView.scrollToEnd()}
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
