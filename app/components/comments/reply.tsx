import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { Title } from "components";
import { Reply as ReplyInterface } from "interfaces";
import { colours, elements, layout } from "styles";
import { formatDate } from "utils";

interface Props {
  item: ReplyInterface;
}

class Reply extends Component<Props> {
  render() {
    const { item } = this.props;

    return (
      <View style={styles.commentContainer}>
        <View style={styles.details}>
          <Image
            source={item.author.avatarPath}
            style={elements.imageRoundSmall}
          />

          <View style={styles.authorDetails}>
            <Title text={item.author.name} small />
            <Text style={elements.textDate}>
              {formatDate(item.dateCreated)}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.body}>{item.body}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  authorDetails: {
    paddingLeft: layout.spacing,
  },
  body: {
    paddingVertical: layout.spacing,
  },
  commentContainer: {
    borderBottomColor: colours.pureWhite,
    borderBottomWidth: 3,
    margin: layout.spacing,
  },
  details: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: layout.spacing,
  },
});

export { Reply };
