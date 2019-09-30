import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Title } from "components";
import { labels } from "labels";
import { Notification as NotificationType } from "interfaces";
import { colours, layout } from "styles";
import { formatDate } from "utils";

interface Props {
  item: NotificationType;
}

class NotificationTitle extends Component<Props> {
  render() {
    const { author, date, type } = this.props.item;
    const { leftAComment, published } = labels.notifications;

    const titleType = type === "comment" ? leftAComment : published;
    const notificationTitle = `${author.name} ${titleType}`;

    return (
      <View style={styles.headings}>
        <Title text={notificationTitle} style={styles.title} small />
        <Text style={styles.date}>{formatDate(date)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  date: {
    color: colours.mediumGrey,
  },
  headings: {
    flex: 1,
    paddingHorizontal: layout.spacing,
  },
  title: {
    color: colours.darkGrey,
    fontWeight: "normal",
  },
});

export { NotificationTitle as Title };
