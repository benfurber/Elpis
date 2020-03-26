import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import FlexImage from "react-native-flex-image";

import { Icon } from "components";
import { Notification } from "interfaces";
import { colours, layout } from "styles";
import { validURL } from "utils";

interface Props {
  item: Notification;
}

class Details extends Component<Props> {
  contentPrefix() {
    const { content } = this.props.item;

    switch (content.type) {
      case "comment":
        return (
          <View style={styles.quotes}>
            <Icon name="quote-left" size={20} style={styles.quote} />
            <Icon name="quote-right" size={20} style={styles.quote} />
          </View>
        );
      case "post":
        const { imagePath } = content.post;

        if (imagePath && validURL(imagePath)) {
          return (
            <View style={styles.imageContainer}>
              <FlexImage source={{ uri: imagePath }} style={styles.image} />
            </View>
          );
        }

      default:
        return null;
    }
  }

  displayText() {
    const { post, reply } = this.props.item.content;
    const text = reply ? reply.content : post.content;
    const characterLimit = 250;

    if (!text || text.length < characterLimit) return text;

    return text.substring(0, characterLimit) + "...";
  }

  render() {
    const { content, newNotification } = this.props.item;
    const { post, reply } = content;

    const title = !reply ? post.title : null;

    if (newNotification) {
      return (
        <View style={[styles.row, styles.content]}>
          {this.contentPrefix()}
          <View style={styles.textContainer}>
            {title && <Text style={[styles.text, styles.bold]}>{title}</Text>}
            <Text style={styles.text}>{this.displayText()}</Text>
          </View>
        </View>
      );
    }

    return null;
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  content: {
    paddingVertical: layout.spacingL,
  },
  image: {
    aspectRatio: 1,
    borderRadius: 5,
    overflow: "hidden",
  },
  imageContainer: {
    flex: 1,
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
    color: colours.darkGrey,
    paddingHorizontal: layout.spacing,
    width: "100%",
  },
  textContainer: {
    flex: 2,
    justifyContent: "center",
  },
});

export { Details };
