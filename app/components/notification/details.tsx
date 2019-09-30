import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import FlexImage from "react-native-flex-image";

import { Icon } from "components";
import { Notification } from "interfaces";
import { colours, layout } from "styles";
import { validURL } from "utils";

const fallbackThumbnail = "../../assets/images/image_post_1.jpg";

interface Props {
  item: Notification;
}

class Details extends Component<Props> {
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

  render() {
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
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: layout.spacingL,
  },
  image: {
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
    color: colours.mediumGrey,
    flex: 1,
    paddingHorizontal: layout.spacing,
  },
});

export { Details };
