import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Badge, Title } from "components";
import { Comment as CommentInterface } from "interfaces";
import { elements, layout } from "styles";
import { dropFirstSentence, firstSentence, formatDate } from "utils";

interface Props {
  item: CommentInterface;
  onPress: (number) => void;
}

class Comment extends Component<Props> {
  renderBody() {
    const { item } = this.props;

    if (dropFirstSentence(item.content)) {
      return <Text style={styles.text}>{dropFirstSentence(item.content)}</Text>;
    }
  }

  render() {
    const { item } = this.props;

    return (
      <TouchableOpacity onPress={() => this.props.onPress(item.id)}>
        <View style={styles.commentContainer}>
          <View style={styles.avatarContainer}>
            <Badge left={35} number={item.totalReplies} />
            <View>
              <Image
                source={item.author.avatarPath}
                style={elements.imageRound}
              />
            </View>
          </View>
          <View style={styles.commentBodyContainer}>
            <Title text={firstSentence(item.content)} />
            {this.renderBody()}
            <Text style={styles.commentDate}>{formatDate(item.createdAt)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  avatarContainer: {
    width: 60,
  },
  commentContainer: {
    alignItems: "stretch",
    flex: 1,
    flexDirection: "row",
    margin: layout.spacing,
  },
  commentBodyContainer: {
    flex: 1,
    marginLeft: layout.spacing,
    marginBottom: layout.spacing,
  },
  commentDate: {
    marginBottom: layout.spacing,
    ...elements.textDate,
  },
  text: {
    flex: 1,
    flexWrap: "nowrap",
    marginBottom: layout.spacing,
  },
});

export { Comment };
