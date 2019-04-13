import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";

import { Comment } from "interfaces";
import { colours, layout, typography } from "styles";
import { formatDate } from "utils";

import { Reply } from "./reply";

interface Props {
  item: Comment;
  onPressComment: () => void;
}

const labels = {
  backButton: "Voltar aos Comentários",
  replies: "respostas",
  noReplies: "Nenhuma resposta ainda. Seja a primeira!"
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
    return (
      <View>
        <Text>{labels.noReplies}</Text>
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
    const { item } = this.props;

    return (
      <View>
        <View>
          <TouchableOpacity onPress={this.props.onPressComment}>
            <Text style={styles.link}>&#60; {labels.backButton}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.featured}>
          <View style={styles.featuredDetails}>
            <Image source={item.author.avatarPath} style={styles.imageLarge} />

            <View style={styles.featuredAuthorDetails}>
              <Text style={styles.highLightText}>{item.author.name}</Text>
              <Text style={styles.commentDate}>
                {formatDate(item.dateCreated)}
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.highLightText}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        </View>

        {this.renderReplies()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatarContainer: {
    width: 60
  },
  commentContainer: {
    alignItems: "stretch",
    flex: 1,
    flexDirection: "row",
    margin: layout.spacing
  },
  commentBodyContainer: {
    flex: 1,
    marginLeft: layout.spacing,
    marginBottom: layout.spacing
  },
  commentDate: {
    color: colours.darkGrey,
    fontStyle: "italic",
    marginBottom: layout.spacing
  },
  badge: {
    alignItems: "center",
    backgroundColor: colours.navyBlueDark,
    borderRadius: 11,
    flexDirection: "column",
    height: 22,
    justifyContent: "center",
    left: 35,
    position: "absolute",
    width: 22,
    zIndex: 1
  },
  badgeText: {
    color: colours.pureWhite,
    fontSize: typography.fontSizeS
  },
  featured: {
    backgroundColor: colours.transparentBlue,
    padding: layout.spacing,
    marginBottom: layout.spacingL
  },
  featuredAuthorDetails: {
    paddingLeft: layout.spacing
  },
  featuredDetails: {
    flexDirection: "row"
  },
  highLightText: {
    fontSize: typography.fontSizeL,
    fontWeight: "bold",
    marginBottom: layout.spacingS
  },
  imageLarge: {
    backgroundColor: colours.emeraldGreen,
    borderRadius: 30,
    height: 60,
    marginBottom: 10,
    overflow: "hidden",
    width: 60
  },
  link: {
    fontStyle: "italic",
    marginHorizontal: layout.spacingS,
    padding: layout.spacing
  },
  subHeading: {
    fontStyle: "italic",
    fontWeight: "bold",
    paddingHorizontal: layout.spacing,
    paddingVertical: layout.spacingS
  }
});

export { Replies };
