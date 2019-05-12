import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";

import { Title } from "components";
import { Comment } from "interfaces";
import { colours, elements, layout, typography } from "styles";
import { formatDate } from "utils";

import { NoContent } from "./no-content";
import { Reply } from "./reply";

interface Props {
  item: Comment;
  header: object;
  noReplies: string;
  onPress: Function;
}

const labels = {
  backButton: "Voltar aos Comentários",
  replies: "respostas"
};

class Replies extends Component<Props> {
  repliesLoop() {
    return (
      <FlatList
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

    return (
      <View style={styles.featured}>
        <View style={styles.featuredDetails}>
          <Image
            source={item.author.avatarPath}
            style={elements.imageRoundLarge}
          />

          <View style={styles.featuredAuthorDetails}>
            <Title text={item.author.name} />
            <Text style={elements.textDate}>
              {formatDate(item.dateCreated)}
            </Text>
          </View>
        </View>

        <View>
          <Title text={item.title} small />
          <Text>{item.body}</Text>
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
    padding: layout.spacing
  },
  featuredAuthorDetails: {
    paddingLeft: layout.spacing
  },
  featuredDetails: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: layout.spacing
  },
  link: {
    fontStyle: "italic",
    marginHorizontal: layout.spacingS,
    padding: layout.spacing
  },
  smallTitle: {
    fontSize: typography.fontSize
  },
  subHeading: {
    fontStyle: "italic",
    fontWeight: "bold",
    paddingHorizontal: layout.spacing,
    paddingVertical: layout.spacingS
  }
});

export { Replies };
