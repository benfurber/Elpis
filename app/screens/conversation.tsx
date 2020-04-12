import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import {
  BackButton,
  BackgroundContainer,
  ConversationScreenHeader,
  MessageList,
  Query,
} from "components";
import { Conversation, NavigationType, User } from "interfaces";
import { layout, colours } from "styles";
import { labels } from "labels";
import { MESSAGE_LIST } from "queries";
import { Analytics } from "utils";

interface Props {
  backToText?: string;
  currentUserId: string;
  id: Conversation["id"];
  remainingParticipants: User[];
  navigation: NavigationType;
}

class ConversationScreen extends Component<Props> {
  componentDidMount() {
    Analytics.track("Conversation");
  }

  render() {
    const {
      backToText,
      currentUserId,
      navigation,
      remainingParticipants,
      id,
    } = this.props;

    return (
      <BackgroundContainer>
        <BackButton
          navigation={navigation}
          onPress={() => navigation.popToTop()}
          text={backToText || labels.back.toConversations}
        />
        <ConversationScreenHeader
          navigation={navigation}
          remainingParticipants={remainingParticipants}
        />
        <View style={styles.container}>
          <Query query={MESSAGE_LIST} variables={{ id }} blueMode>
            {({ conversation }) => (
              <MessageList
                conversation={conversation}
                currentUserId={currentUserId}
                navigation={navigation}
              />
            )}
          </Query>
        </View>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    backgroundColor: colours.whiteTransparent,
    flex: 1,
    paddingTop: layout.spacing,
    width: "100%",
  },
});

const wrappedConversationScreen = withMappedNavigationParams()(
  ConversationScreen,
);
export {
  wrappedConversationScreen as ConversationScreen,
  ConversationScreen as UnwrappedConversationScreen,
};
