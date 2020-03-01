import React, { Component } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Autolink from "react-native-autolink";

import { LinkPreview, RemoteImage } from "components";
import { NavigationType, Reply as ReplyInterface } from "interfaces";
import { colours, layout, typography } from "styles";

const { width } = Dimensions.get("window");

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
      return (
        <View style={styles.imageContainer}>
          <RemoteImage imagePath={imagePath} />
        </View>
      );
    }
    if (link) {
      return <LinkPreview navigation={navigation} url={link} />;
    }
    return null;
  }

  render() {
    return (
      <View>
        {this.renderContent()}
        {this.previewContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    fontSize: typography.fontSize,
    paddingVertical: layout.spacing,
  },
  imageContainer: {
    borderRadius: layout.borderRadiusL,
    overflow: "hidden",
    width: width * 0.7,
  },
  link: {
    color: colours.darkGrey,
    textDecorationLine: "underline",
  },
});

export { RichTextDisplay };
