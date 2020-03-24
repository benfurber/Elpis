import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Icon, Title } from "components";
import { colours, layout } from "styles";
import { labels } from "labels";

interface Props {
  level: number;
}

class CommentsSectionHeader extends Component<Props> {
  render() {
    const { level } = this.props;

    const backgroundColours = [
      "rgb(186, 202, 214)",
      "rgb(144, 171, 190)",
      "rgb(117, 150, 173)",
    ];
    const icons = ["holly-berry", "seedling", "spa"];
    const title = labels.topicDiscussionLevels[level].title;
    const description = labels.topicDiscussionLevels[level].description;

    return (
      <View style={styles.container}>
        <Icon
          name={icons[level]}
          containerStyle={[
            styles.icon,
            { backgroundColor: backgroundColours[level] },
          ]}
          size={25}
          colour={colours.pureWhite}
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
  icon: {
    alignItems: "center",
    borderBottomRightRadius: 0,
    borderRadius: 40,
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    marginRight: layout.spacing,
    marginTop: 3,
    padding: layout.spacing,
    width: 50,
  },
  textContainer: {
    flex: 1,
  },
});

export { CommentsSectionHeader };
