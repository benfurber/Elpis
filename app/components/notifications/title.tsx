import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Title } from "components";
import { labels } from "labels";
import { Notification as NotificationType } from "interfaces";
import { colours, layout, typography } from "styles";
import { formatDate } from "utils";

interface Props {
  item: NotificationType;
}

function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class NotificationTitle extends Component<Props> {
  title() {
    const { content, newNotification } = this.props.item;
    const { post, reply, type } = content;

    const details = {
      comment: {
        author: reply && reply.author.name,
        title: labels.notifications.leftAComment,
      },
      post: {
        author: post.author.name,
        title: labels.notifications.published,
      },
    };

    if (!newNotification) {
      return (
        <Text style={styles.title}>
          {capitalise(details[type].title)}:{" "}
          <Text style={[styles.title, styles.span]}>{post.title}</Text>
        </Text>
      );
    }

    const notificationTitle = `${details[type].author} ${details[type].title}`;

    return <Title text={notificationTitle} style={styles.title} small />;
  }

  render() {
    const { createdAt } = this.props.item;

    return (
      <View style={styles.headings}>
        {this.title()}
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
  span: {
    color: colours.navyBlueDark,
  },
  title: {
    fontFamily: "creteround-regular",
    fontSize: typography.fontSize,
    fontWeight: "normal",
  },
});

export { NotificationTitle as Title };
