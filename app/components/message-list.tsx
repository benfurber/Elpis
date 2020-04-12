import React, { Component } from "react";
import { FlatList } from "react-native";

import { Message } from "components";
import {
  Conversation,
  Message as MessageType,
  NavigationType,
  User,
} from "interfaces";
import { layout } from "styles";

interface Props {
  conversation: Conversation;
  currentUserId: User["id"];
  navigation: NavigationType;
}

interface State {
  loading: boolean;
}

class MessageList extends Component<Props, State> {
  render() {
    const { conversation, currentUserId, navigation } = this.props;

    return (
      <FlatList
        contentContainerStyle={{ paddingBottom: layout.spacingXL }}
        data={conversation.messages}
        initialNumToRender={5}
        keyExtractor={({ id }) => id}
        renderItem={({ item }: { item: MessageType }) => (
          <Message
            item={item}
            navigation={navigation}
            currentUser={currentUserId === item.author.id}
          />
        )}
      />
    );
  }
}

export { MessageList };
