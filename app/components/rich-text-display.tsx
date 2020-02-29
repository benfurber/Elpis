import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Autolink from "react-native-autolink";

import { LinkPreview, RemoteImage } from "components";
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

  previewContent() {
    const { item, navigation } = this.props;
    const { imagePath, link } = item;

    if (imagePath) {
      return <RemoteImage imagePath={imagePath} />;
    }
    if (link) {
      return <LinkPreview navigation={navigation} url={link} />;
    }
    return null;
  }

  render() {
    return (
      <View>
        {this.previewContent()}
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
