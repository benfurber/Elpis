import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { BackgroundContainer, ConversationList, Title } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { layout, typography } from "styles";
import { Analytics } from "utils";

interface Props {
  navigation: NavigationType;
}

class ConversationFeedScreen extends Component<Props> {
  componentDidMount() {
    Analytics.track("Conversation Feed");
  }

  render() {
    const { navigation } = this.props;

    return (
      <BackgroundContainer>
        <Title style={styles.title} text={labels.messages.title} />
        <ConversationList navigation={navigation} />
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: typography.fontSizeXL,
    margin: layout.spacingL,
  },
});

export { ConversationFeedScreen };
