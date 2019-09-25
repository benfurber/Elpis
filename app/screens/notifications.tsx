import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { BackgroundContainer, Notification, Title } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { Analytics } from "utils";
import { colours, layout, typography } from "styles";

interface Props {
  navigation: NavigationType;
}

class NotificationsScreen extends Component<Props> {
  componentDidMount() {
    Analytics.track("Notifications");
  }

  render() {
    return (
      <BackgroundContainer>
        <Title style={styles.title} text={labels.notifications.title} />
        <View style={styles.heading}>
          <Title text={labels.notifications.new} />
        </View>
        <Notification />
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: colours.transparentBlue,
    marginVertical: layout.spacing,
    paddingHorizontal: layout.spacingL,
    paddingTop: layout.spacingS,
  },
  title: {
    fontSize: typography.fontSizeXL,
    margin: layout.spacingL,
  },
});

export { NotificationsScreen };
