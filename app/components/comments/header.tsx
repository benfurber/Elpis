import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Title } from "components";
import { Post } from "interfaces";
import { colours, layout } from "styles";
import { firstSentence } from "utils";

interface Props {
  content?: Post["content"];
  title?: Post["title"];
}

class Header extends Component<Props> {
  render() {
    const { content, title } = this.props;

    if (title) {
      return (
        <View style={styles.titleContainer}>
          <Title text={title} />
        </View>
      );
    }

    if (content) {
      return (
        <View style={styles.titleContainer}>
          <Title text={firstSentence(content)} />
        </View>
      );
    }

    return null;
  }
}

const styles = StyleSheet.create({
  commentsHeadingContainer: {
    marginHorizontal: layout.spacing,
    marginVertical: layout.spacingL,
  },
  titleContainer: {
    margin: layout.spacingL,
  },
});

export { Header };
