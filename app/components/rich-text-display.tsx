import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { LinkPreview } from "components";
import { NavigationType, Reply as ReplyInterface } from "interfaces";
import { layout } from "styles";

interface Props {
  item: ReplyInterface;
  navigation: NavigationType;
}

class RichTextDisplay extends Component<Props> {
  render() {
    const { item, navigation } = this.props;
    const { content, link } = item;

    return (
      <View>
        {link && <LinkPreview navigation={navigation} url={link} />}
        <Text style={styles.body}>{content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingVertical: layout.spacing,
  },
});

export { RichTextDisplay };
