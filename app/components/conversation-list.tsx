import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";

import { BackButton, ConversationListItem, Query } from "components";
import { Conversation, NavigationType } from "interfaces";
import { labels } from "labels";
import { CONVERSATION_LIST } from "queries";
import { layout } from "styles";

import { NoContent } from "./comments/no-content";

interface Props {
  navigation: NavigationType;
}

class ConversationList extends Component<Props> {
  renderList = ({ me }) => {
    const { navigation } = this.props;

    if (me) {
      return (
        <FlatList
          contentContainerStyle={{ paddingBottom: layout.spacingXL }}
          data={me.conversations}
          ListEmptyComponent={<NoContent text={labels.noReplies} />}
          initialNumToRender={5}
          keyExtractor={({ id }) => id}
          renderItem={({ item }: { item: Conversation }) => (
            <ConversationListItem
              item={item}
              navigation={navigation}
              currentUserId={me.id}
            />
          )}
        />
      );
    }
  };

  render() {
    return (
      <Query query={CONVERSATION_LIST} blueMode>
        {this.renderList}
      </Query>
    );
  }
}

export { ConversationList };
