import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";

import { Avatar, Title } from "components";
import { Comment } from "interfaces";
import { labels } from "labels";
import { colours, elements, layout, typography } from "styles";
import { Analytics, dropFirstSentence, firstSentence, formatDate } from "utils";

import { NoContent } from "./no-content";
import { Reply } from "./reply";

interface Props {
  item: Comment;
  header: object;
  noReplies: string;
  onPress: Function;
}

class Replies extends Component<Props> {
  componentDidMount() {
    Analytics.trackContent({
      contentType: "Replies",
      contentId: this.props.item.id,
    });
  }

  repliesLoop() {
    return (
      <FlatList
        contentContainerStyle={{ paddingBottom: layout.spacingXL }}
        data={this.props.item.replies}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Reply item={item} />}
      />
    );
  }

  noReplies() {
    return <NoContent text={this.props.noReplies} />;
  }

  renderBackButton() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.onPress()}>
          <Text style={styles.link}>&#60; {labels.backButton}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderComment() {
    const { item } = this.props;
    const { content } = item;

    const title = content && firstSentence(content);
    const body = content && dropFirstSentence(content);

    return (
      <View style={styles.featured}>
        <View style={styles.featuredDetails}>
          <Avatar avatarPath={item.author.avatarPath} size={"large"} />

          <View style={styles.featuredAuthorDetails}>
            <Title text={item.author.name} />
            <Text style={elements.textDate}>{formatDate(item.createdAt)}</Text>
          </View>
        </View>

        <View>
          {title && <Title text={title} small />}
          {body && <Text>{body}</Text>}
        </View>
      </View>
    );
  }

  renderReplies() {
    const { totalReplies } = this.props.item;

    if (totalReplies > 0) {
      return (
        <View>
          <Text style={styles.subHeading}>
            {totalReplies} {labels.replies}
          </Text>
          {this.repliesLoop()}
        </View>
      );
    }

    return this.noReplies();
  }

  render() {
    return (
      <View>
        {this.props.header}
        {this.renderBackButton()}
        {this.renderComment()}
        {this.renderReplies()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  featured: {
    backgroundColor: colours.transparentBlue,
    marginBottom: layout.spacingL,
    padding: layout.spacing,
  },
  featuredAuthorDetails: {
    paddingLeft: layout.spacing,
  },
  featuredDetails: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: layout.spacing,
  },
  link: {
    fontStyle: "italic",
    marginHorizontal: layout.spacingS,
    padding: layout.spacing,
  },
  smallTitle: {
    fontSize: typography.fontSize,
  },
  subHeading: {
    fontStyle: "italic",
    fontWeight: "bold",
    paddingHorizontal: layout.spacing,
    paddingVertical: layout.spacingS,
  },
});

export { Replies };
