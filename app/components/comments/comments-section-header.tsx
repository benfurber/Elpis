import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { IconDiscussionLevel, Title } from "components";
import { layout } from "styles";
import { labels } from "labels";

interface Props {
  level: number;
}

class CommentsSectionHeader extends Component<Props> {
  render() {
    const { level } = this.props;

    const title = labels.topicDiscussionLevels[level].title;
    const description = labels.topicDiscussionLevels[level].description;

    return (
      <View style={styles.container}>
        <IconDiscussionLevel
          containerStyle={styles.iconContainerStyles}
          level={level}
          size={25}
        />
        <View style={styles.textContainer}>
          <Title text={title} />
          <Title text={description} small />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    flexDirection: "row",
    marginHorizontal: layout.spacing,
  },
  iconContainerStyles: {
    borderTopRightRadius: 0,
    marginRight: layout.spacing,
    marginTop: 3,
  },
  textContainer: {
    flex: 1,
  },
});

export { CommentsSectionHeader };
