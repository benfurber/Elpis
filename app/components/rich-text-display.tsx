import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Autolink from "react-native-autolink";

import { LinkPreview } from "components";
import { NavigationType, Reply as ReplyInterface } from "interfaces";
import { colours, layout, typography } from "styles";

interface Props {
  item: ReplyInterface;
  navigation: NavigationType;
}

class RichTextDisplay extends Component<Props> {
  onPress() {
    const { item, navigation } = this.props;
    const { link } = item;

    return navigation.navigate("Browser", { uri: link });
  }

  renderContent() {
    const { content } = this.props.item;

    if (!content) return null;

    return (
      <Autolink
        onPress={() => this.onPress()}
        text={content}
        style={styles.body}
        linkStyle={styles.link}
      />
    );
  }

  render() {
    const { item, navigation } = this.props;
    const { link } = item;

    return (
      <View>
        {link && <LinkPreview navigation={navigation} url={link} />}
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    fontSize: typography.fontSize,
    paddingVertical: layout.spacing,
  },
  link: {
    color: colours.darkGrey,
    textDecorationLine: "underline",
  },
});

export { RichTextDisplay };
