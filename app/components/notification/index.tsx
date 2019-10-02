import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { Badge, Query, Title } from "components";
import { NavigationType, Notification as NotificationType } from "interfaces";
import { labels } from "labels";
import { NOTIFICATIONS } from "queries";
import { layout, typography } from "styles";

import { Notification } from "./notification";

interface Props {
  navigation: NavigationType;
}

class Notifications extends Component<Props> {
  filterNotifications(data, boolean) {
    const { notifications } = data.me;
    return notifications.filter(
      notification => notification.newNotification === boolean,
    );
  }

  loop = data => {
    const newNotifications = this.filterNotifications(data, true);
    const oldNotifications = this.filterNotifications(data, false);

    return (
      <View style={{ height: "100%" }}>
        <View style={styles.heading}>
          <Title text={labels.notifications.newMultiple} />
          <Badge left={65} number={newNotifications.length} />
        </View>

        <FlatList
          data={newNotifications}
          keyExtractor={({ id }) => id}
          renderItem={({ item }: { item: NotificationType }) => (
            <Notification navigation={this.props.navigation} item={item} />
          )}
        />

        <View style={styles.heading}>
          <Title text={labels.notifications.oldMultiple} />
        </View>

        <FlatList
          data={oldNotifications}
          keyExtractor={({ id }) => id}
          renderItem={({ item }: { item: NotificationType }) => (
            <Notification navigation={this.props.navigation} item={item} />
          )}
        />
      </View>
    );
  };

  render() {
    return <Query query={NOTIFICATIONS}>{this.loop}</Query>;
  }
}

const styles = StyleSheet.create({
  heading: {
    marginVertical: layout.spacing,
    paddingHorizontal: layout.spacingL,
    paddingTop: layout.spacingS,
  },
  title: {
    fontSize: typography.fontSizeXL,
    margin: layout.spacingL,
  },
});

export { Notifications };
