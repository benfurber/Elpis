import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { BackgroundContainer, Notifications, Title } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { layout, typography } from "styles";
import { Analytics } from "utils";

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
        <Notifications navigation={this.props.navigation} />
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

export { NotificationsScreen };
