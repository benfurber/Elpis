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
    const { content, createdAt } = this.props.item;
    const { post, reply, type } = content;

    const details = {
      comment: {
        title: labels.notifications.leftAComment,
        author: reply && reply.author.name,
      },
      post: {
        title: labels.notifications.published,
        author: post.author.name,
      },
    };

    const notificationTitle = `${details[type].author} ${details[type].title}`;

    return (
      <View style={styles.headings}>
        <Title text={notificationTitle} style={styles.title} small />
        <Text style={styles.date}>{formatDate(createdAt)}</Text>
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
