import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Title } from "components";
import { Post } from "interfaces";
import { colours, layout } from "styles";
import { firstSentence, totalComments } from "utils";

const labels = {
  comments: "Comentários",
  topics: "Tópicos"
};

interface Props {
  comments: Post["comments"];
  description: Post["description"];
}

class Header extends Component<Props> {
  renderDescription = () => {
    if (this.props.description) {
      return (
        <View style={styles.titleContainer}>
          <Title text={firstSentence(this.props.description)} />
        </View>
      );
    }
  };

  render() {
    const { comments } = this.props;

    const titleText = `${totalComments(comments)} ${labels.comments} - ${
      comments.length
    } ${labels.topics}`;

    return (
      <View>
        {this.renderDescription()}

        <View style={styles.commentsHeadingContainer}>
          <Title text={titleText} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  commentsHeadingContainer: {
    marginVertical: layout.spacingL,
    marginHorizontal: layout.spacing
  },
  titleContainer: {
    backgroundColor: colours.whiteTransparent,
    borderRadius: layout.borderRadius,
    margin: layout.spacing,
    padding: layout.spacing
  }
});

export { Header };
