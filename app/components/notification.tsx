import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import FlexImage from "react-native-flex-image";

import { Avatar, Icon, Title } from "components";
import { labels } from "labels";
import { Notification as NotificationType } from "interfaces";
import { colours, layout } from "styles";
import { formatDate, validURL } from "utils";

const fallbackThumbnail = "../assets/images/image_post_1.jpg";

interface Props {
  item: NotificationType;
}

class Notification extends Component<Props> {
  avatarDisplay() {
    const { newNotification } = this.props.item;
    const size = newNotification ? "xl" : "medium";
    const style = newNotification ? styles.avatar : {};

    return (
      <View style={styles.row}>
        <Avatar avatarPath={null} size={size} styles={style} />
        {newNotification ? this.typeIcon() : null}
      </View>
    );
  }

  contentPrefix() {
    const { imagePath, type } = this.props.item;

    const source = validURL(imagePath) ? imagePath : require(fallbackThumbnail);

    if (type === "comment") {
      return (
        <View style={styles.quotes}>
          <Icon name="quote-left" size={20} style={styles.quote} />
          <Icon name="quote-right" size={20} style={styles.quote} />
        </View>
      );
    }

    return (
      <View style={styles.imageContainer}>
        <FlexImage source={source} style={styles.image} />
      </View>
    );
  }

  detailsDisplay() {
    const { content, newNotification } = this.props.item;

    if (newNotification) {
      return (
        <View style={[styles.row, styles.content]}>
          {this.contentPrefix()}
          <Text style={styles.text}>{content}</Text>
        </View>
      );
    }

    return null;
  }

  titleDisplay() {
    const { author, date, type } = this.props.item;
    const { leftAComment, published } = labels.notifications;

    const titleType = type === "comment" ? leftAComment : published;
    const notificationTitle = `${author.name} ${titleType}`;

    return (
      <View style={styles.notificationHeadings}>
        <Title
          text={notificationTitle}
          style={styles.notificationTitle}
          small
        />
        <Text style={styles.date}>{formatDate(date)}</Text>
      </View>
    );
  }

  typeIcon() {
    const { type } = this.props.item;
    const name = type === "comment" ? "comments" : "image";

    return (
      <View style={styles.icon}>
        <Icon colour={colours.pureWhite} name={name} size={30} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.item}>
        <View style={styles.row}>
          {this.avatarDisplay()}
          {this.titleDisplay()}
        </View>
        {this.detailsDisplay()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    borderColor: colours.navyBlueDark,
    borderWidth: 4,
  },
  content: {
    paddingVertical: layout.spacingL,
  },
  date: {
    color: colours.mediumGrey,
  },
  icon: {
    alignItems: "center",
    backgroundColor: colours.transparentBlue,
    borderRadius: 60,
    left: -10,
    width: 35 + 20,
    paddingHorizontal: 10,
    paddingVertical: 12,
    zIndex: -1,
  },
  image: {
    borderRadius: 5,
    overflow: "hidden",
  },
  imageContainer: {
    flex: 1,
  },
  item: {
    backgroundColor: colours.whiteTransparent,
    marginBottom: layout.spacing,
    padding: layout.spacing,
  },
  notificationContent: {
    padding: layout.spacing,
  },
  notificationHeadings: {
    flex: 1,
    paddingHorizontal: layout.spacing,
  },
  notificationTitle: {
    color: colours.darkGrey,
    fontWeight: "normal",
  },
  quote: {
    paddingBottom: layout.spacingS,
  },
  quotes: {
    alignSelf: "flex-start",
    paddingLeft: layout.spacingS,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: colours.mediumGrey,
    flex: 1,
    paddingHorizontal: layout.spacing,
  },
});

export { Notification };
