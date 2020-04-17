import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { withMappedNavigationParams } from "react-navigation-props-mapper";

import {
  BackButton,
  BackgroundContainer,
  ConversationScreenHeader,
  ConversationQuery,
  KeyboardAddMessage,
} from "components";
import { Conversation, NavigationType, User } from "interfaces";
import { layout, colours } from "styles";
import { labels } from "labels";
import { Analytics } from "utils";

interface Props {
  backToText?: string;
  currentUserId: string;
  id: Conversation["id"];
  remainingParticipants: User[];
  navigation: NavigationType;
}

interface State {
  feedScrollView: any;
}

class ConversationScreen extends Component<Props, State> {
  state = {
    feedScrollView: null,
  };

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

    const { feedScrollView } = this.state;

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
          <ConversationQuery
            id={id}
            currentUserId={currentUserId}
            navigation={navigation}
            setFeedScrollView={feedScrollView => this.setState(feedScrollView)}
          />
        </View>
        <KeyboardAddMessage
          conversationId={id}
          feedScrollView={feedScrollView}
        />
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
