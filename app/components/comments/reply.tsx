import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Reply as ReplyInterface } from "interfaces";
import { colours, layout, typography } from "styles";
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
          <Image source={item.author.avatarPath} style={styles.imageSmall} />

          <View style={styles.authorDetails}>
            <Text style={styles.authorName}>{item.author.name}</Text>
            <Text style={styles.date}>{formatDate(item.dateCreated)}</Text>
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
  commentContainer: {
    borderBottomColor: colours.pureWhite,
    borderBottomWidth: 3,
    margin: layout.spacing
  },
  commentBodyContainer: {
    flex: 1,
    marginLeft: layout.spacing,
    marginBottom: layout.spacing
  },
  date: {
    color: colours.darkGrey,
    fontStyle: "italic"
  },
  authorName: {
    fontSize: typography.fontSizeL,
    fontWeight: "bold",
    marginBottom: layout.spacingS
  },
  body: {
    paddingVertical: layout.spacing
  },
  featured: {
    backgroundColor: colours.transparentBlue,
    padding: layout.spacing
  },
  authorDetails: {
    paddingLeft: layout.spacing
  },
  details: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: layout.spacing
  },
  imageSmall: {
    backgroundColor: colours.emeraldGreen,
    borderRadius: 23,
    height: 45,
    overflow: "hidden",
    width: 45
  },
  link: {
    fontStyle: "italic",
    marginHorizontal: layout.spacingS,
    padding: layout.spacing
  },
  text: {
    flex: 1,
    flexWrap: "nowrap"
  }
});

export { Reply };
