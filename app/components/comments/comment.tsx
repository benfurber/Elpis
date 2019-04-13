import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Comment as CommentInterface, NavigationType } from "interfaces";
import { colours, layout, typography } from "styles";
import { formatDate } from "utils";

import { Replies } from "./replies";

interface Props {
  item: CommentInterface;
  navigation: NavigationType;
}

interface State {
  display: "comment" | "replies";
}

class Comment extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      display: "comment"
    };
  }

  onPressComment = () => {
    this.setState({ display: "comment" });
  };

  onPressReplies = () => {
    this.setState({ display: "replies" });
  };

  renderComment() {
    const { item } = this.props;

    return (
      <TouchableOpacity onPress={this.onPressReplies}>
        <View style={styles.commentContainer}>
          <View style={styles.avatarContainer}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.totalReplies}</Text>
            </View>
            <View>
              <Image
                source={item.author.avatarPath}
                style={styles.imageMedium}
              />
            </View>
          </View>
          <View style={styles.commentBodyContainer}>
            <Text style={styles.commentTitle}>{item.title}</Text>
            <Text style={styles.commentDate}>
              {formatDate(item.dateCreated)}
            </Text>
            <Text style={styles.text}>{item.body}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    if (this.state.display === "replies") {
      return (
        <Replies item={this.props.item} onPressComment={this.onPressComment} />
      );
    }

    return this.renderComment();
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
  commentTitle: {
    fontSize: typography.fontSizeL,
    marginBottom: layout.spacingS
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
    padding: layout.spacing
  },
  featuredAuthorDetails: {
    paddingLeft: layout.spacing
  },
  featuredDetails: {
    flexDirection: "row"
  },
  imageLarge: {
    backgroundColor: colours.emeraldGreen,
    borderRadius: 30,
    height: 60,
    marginBottom: 10,
    overflow: "hidden",
    width: 60
  },
  imageMedium: {
    backgroundColor: colours.emeraldGreen,
    borderRadius: 25,
    height: 50,
    marginTop: 10,
    overflow: "hidden",
    width: 50
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

export { Comment };
