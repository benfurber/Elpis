import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";

import { Post as PostInterface } from "interfaces";

import { Body } from "./body";
import { Footer } from "./footer";
import { Tabs } from "./tabs";

interface Props {
  navigation: NavigationScreenProp<any, any>;
  post: PostInterface;
}

class Post extends Component<Props> {
  onPressComments = () => {
    const { navigation, post } = this.props;
    return navigation.navigate("Post", {
      post
    });
  };

  onPressPost = () => {
    const { navigation } = this.props;
    return navigation.goBack();
  };

  render() {
    const { author, date, description, imagePath } = this.props.post;

    return (
      <View style={styles.container}>
        <Tabs
          onPressComments={this.onPressComments}
          onPressPost={this.onPressPost}
        />
        <Body date={date} description={description} imagePath={imagePath} />
        <Footer avatarPath={author.avatarPath} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  }
});

export { Post };
