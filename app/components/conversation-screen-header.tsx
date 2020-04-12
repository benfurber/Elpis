import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Avatar, Title } from "components";
import { NavigationType, User } from "interfaces";
import { layout, colours } from "styles";

interface Props {
  remainingParticipants: User[];
  navigation: NavigationType;
}

class ConversationScreenHeader extends Component<Props> {
  render() {
    const { navigation, remainingParticipants } = this.props;

    return (
      <View style={styles.container}>
        <Avatar
          avatarPath={remainingParticipants[0].avatarPath}
          containerStyles={styles.avatarContainer}
          navigation={navigation}
          size="large"
          userId={remainingParticipants[0].id}
        />
        <View style={styles.nameContainer}>
          <Title style={styles.title} text={remainingParticipants[0].name} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatarContainer: {
    backgroundColor: colours.whiteTransparent,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 10,
    paddingBottom: 0,
  },
  container: {
    alignItems: "baseline",
    flexDirection: "row",
  },
  nameContainer: {
    backgroundColor: colours.whiteTransparent,
    borderTopRightRadius: layout.borderRadiusL,
    flex: 1,
  },
  title: {
    marginBottom: 0,
    padding: layout.spacingS,
  },
});

export { ConversationScreenHeader };
