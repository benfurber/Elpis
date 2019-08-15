import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Title } from "components";
import { Post } from "interfaces";
import { colours, layout } from "styles";
import { firstSentence } from "utils";

interface Props {
  comments: Post["comments"];
  content: Post["content"];
}

class Header extends Component<Props> {
  render() {
    if (this.props.content) {
      return (
        <View style={styles.titleContainer}>
          <Title text={firstSentence(this.props.content)} />
        </View>
      );
    }

    return null;
  }
}

const styles = StyleSheet.create({
  commentsHeadingContainer: {
    marginVertical: layout.spacingL,
    marginHorizontal: layout.spacing,
  },
  titleContainer: {
    backgroundColor: colours.whiteTransparent,
    borderRadius: layout.borderRadius,
    margin: layout.spacing,
    padding: layout.spacing,
  },
});

export { Header };
