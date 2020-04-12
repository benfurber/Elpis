import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import { Avatar, Title } from "components";
import { Conversation as ConversationType, NavigationType } from "interfaces";
import { labels } from "labels";
import { colours, layout } from "styles";

interface Props {
  currentUserId: string;
  item: ConversationType;
  navigation: NavigationType;
}

class ConversationListItem extends Component<Props> {
  renderUserAvatars() {
    const { navigation, item } = this.props;

    return (
      <FlatList
        data={item.remainingParticipants}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Avatar
            avatarPath={item.avatarPath}
            navigation={navigation}
            userId={item.id}
          />
        )}
      />
    );
  }

  renderConversationName() {
    const { remainingParticipants } = this.props.item;

    if (remainingParticipants && remainingParticipants.length === 1) {
      return remainingParticipants[0].name;
    }

    return labels.messages.groupDiscussion;
  }

  render() {
    const { currentUserId, navigation, item } = this.props;
    const { id, remainingParticipants } = item;
    const onPress = () =>
      navigation.navigate("Conversation", {
        currentUserId,
        id,
        remainingParticipants,
      });

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          {this.renderUserAvatars()}
          <Title text={this.renderConversationName()} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colours.whiteTransparent,
    borderRadius: 50,
    flexDirection: "row",
    margin: layout.spacing,
    padding: layout.spacing,
  },
});

export { ConversationListItem };
