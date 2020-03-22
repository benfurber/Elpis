import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { RemoteImage } from "components";
import { NavigationType, Post } from "interfaces";
import { labels } from "labels";
import { layout } from "styles";

interface Props {
  post: Post;
  navigation: NavigationType;
}

class ThumbnailImagePost extends Component<Props> {
  onPress() {
    const { navigation, post } = this.props;

    const params = {
      backToText: labels.back.toCommunityBoard,
      id: post.id,
      setDisplay: "body",
    };

    return navigation.navigate("Post", params);
  }
  render() {
    const { imagePath } = this.props.post;

    return (
      <View style={styles.image}>
        <TouchableOpacity onPress={() => this.onPress()}>
          <RemoteImage imagePath={imagePath} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    borderRadius: layout.borderRadius,
    flex: 1,
    marginHorizontal: layout.spacing,
    overflow: "hidden",
  },
});

export { ThumbnailImagePost };
