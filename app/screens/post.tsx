import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Post } from "components";
import { NavigationType } from "interfaces";
import { colours } from "styles";

interface Props {
  navigation: NavigationType;
}

class PostScreen extends Component<Props> {
  getPost() {
    const { navigation } = this.props;

    let post;
    if (navigation) {
      post = navigation.getParam("post", null);
    }
    return post;
  }

  render() {
    return (
      <View style={styles.container}>
        <Post navigation={this.props.navigation} post={this.getPost()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.transparentBlue,
    flex: 1,
    flexDirection: "column"
  }
});

export { PostScreen };
